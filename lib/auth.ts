import { createBrowserClient } from "@supabase/ssr";

export async function registerUser({
  email,
  password,
  firstName,
  lastName,
  birthday,
  gender,
}: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  birthday: string;
  gender: string;
}) {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  // 1. Create the auth user
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (authError) return { data: null, error: authError };

  const user = authData.user;

  if (!user) {
    return { data: null, error: { message: "No user returned from signUp" } };
  }

  // 2. Create profile record using user.id
  const { data: profileData, error: profileError } = await supabase
    .from("profiles")
    .insert({
      id: user.id, // PK = user.id
      first_name: firstName,
      last_name: lastName,
      birthday,
      gender,
    })
    .select()
    .single();

  return {
    data: { user, profile: profileData },
    error: profileError,
  };
}

export async function loginUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return { data, error };
}
