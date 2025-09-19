-- Fix critical security issue: Replace overly permissive profile access policy
-- Remove the policy that allows everyone to view all profiles
DROP POLICY IF EXISTS "Profiles are viewable by everyone" ON public.profiles;

-- Create secure policy: Users can only view their own profile
CREATE POLICY "Users can view their own profile" 
ON public.profiles 
FOR SELECT 
USING (auth.uid() = user_id);

-- Optional: Create policy for public display names only (if needed for user listings)
-- This allows viewing only display_name and avatar_url for authenticated users
CREATE POLICY "Authenticated users can view public profile info" 
ON public.profiles 
FOR SELECT 
USING (
  auth.uid() IS NOT NULL 
  AND (
    auth.uid() = user_id 
    OR (display_name IS NOT NULL AND avatar_url IS NOT NULL)
  )
);