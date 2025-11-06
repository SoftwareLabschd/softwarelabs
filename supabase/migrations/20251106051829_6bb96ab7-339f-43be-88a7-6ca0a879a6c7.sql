-- Fix 1: Update profiles table policies to be more secure
-- Drop existing policies
DROP POLICY IF EXISTS "authenticated_users_view_own_profile" ON public.profiles;
DROP POLICY IF EXISTS "authenticated_users_insert_own_profile" ON public.profiles;
DROP POLICY IF EXISTS "authenticated_users_update_own_profile" ON public.profiles;
DROP POLICY IF EXISTS "authenticated_users_delete_own_profile" ON public.profiles;

-- Create new, more secure policies for profiles
-- Users can only view their own profile
CREATE POLICY "Users can view own profile"
  ON public.profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Users can insert their own profile only
CREATE POLICY "Users can insert own profile"
  ON public.profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Users can update their own profile only
CREATE POLICY "Users can update own profile"
  ON public.profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Users can delete their own profile only
CREATE POLICY "Users can delete own profile"
  ON public.profiles
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Admins can view all profiles
CREATE POLICY "Admins can view all profiles"
  ON public.profiles
  FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Fix 3: Add admin policies for user_roles management
-- Admins can insert roles
CREATE POLICY "Admins can assign roles"
  ON public.user_roles
  FOR INSERT
  TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Admins can update roles
CREATE POLICY "Admins can modify roles"
  ON public.user_roles
  FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Admins can delete roles
CREATE POLICY "Admins can remove roles"
  ON public.user_roles
  FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));