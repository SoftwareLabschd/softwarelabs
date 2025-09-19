-- Fix anonymous access security issue
-- Remove the problematic policy that allows anonymous access
DROP POLICY IF EXISTS "Authenticated users can view public profile info" ON public.profiles;

-- Update the user profile policy to be more restrictive
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;

-- Create a strict policy that only allows authenticated users to view their own profile
CREATE POLICY "Users can view own profile only" 
ON public.profiles 
FOR SELECT 
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id);

-- Ensure update policy is also secure
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;

CREATE POLICY "Users can update own profile only" 
ON public.profiles 
FOR UPDATE 
USING (auth.uid() IS NOT NULL AND auth.uid() = user_id);

-- Ensure insert policy is also secure  
DROP POLICY IF EXISTS "Users can insert their own profile" ON public.profiles;

CREATE POLICY "Users can insert own profile only" 
ON public.profiles 
FOR INSERT 
WITH CHECK (auth.uid() IS NOT NULL AND auth.uid() = user_id);