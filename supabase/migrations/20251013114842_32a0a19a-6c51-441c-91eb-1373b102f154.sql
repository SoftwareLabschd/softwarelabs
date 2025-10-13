-- Add DELETE policy for profiles table to prevent unauthorized deletions
CREATE POLICY "authenticated_users_delete_own_profile" 
ON public.profiles 
FOR DELETE 
TO authenticated
USING (auth.uid() = user_id);