-- Fix all functions to use secure search_path = ''

-- Fix authorize function
CREATE OR REPLACE FUNCTION public.authorize(requested_permission app_permission)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $function$
declare
  bind_permissions int;
begin
  select count(*)
  from public.role_permissions
  where role_permissions.permission = authorize.requested_permission
    and role_permissions.role = (auth.jwt() ->> 'user_role')::public.app_role
  into bind_permissions;
  
  return bind_permissions > 0;
end;
$function$;

-- Fix handle_new_user function
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $function$
declare is_admin boolean;
begin
  -- Insert into profiles table (existing)
  insert into public.profiles (user_id, display_name)
  values (new.id, COALESCE(new.raw_user_meta_data->>'display_name', new.email));
  
  -- Insert into users table (new slack-clone table)
  insert into public.users (id, username)
  values (new.id, new.email);
  
  select count(*) = 1 from auth.users into is_admin;
  
  if position('+supaadmin@' in new.email) > 0 then
    insert into public.user_roles (user_id, role) values (new.id, 'admin');
  elsif position('+supamod@' in new.email) > 0 then
    insert into public.user_roles (user_id, role) values (new.id, 'moderator');
  end if;
  
  return new;
end;
$function$;

-- Fix create_user function
CREATE OR REPLACE FUNCTION public.create_user(email text)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $function$
  declare
  user_id uuid;
begin
  user_id := extensions.uuid_generate_v4();
  
  insert into auth.users (id, email)
    values (user_id, email)
    returning id into user_id;

    return user_id;
end;
$function$;

-- Fix has_role function (created in previous migration)
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = ''
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;