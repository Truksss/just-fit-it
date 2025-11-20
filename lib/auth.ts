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

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name: firstName,
        last_name: lastName,
        birthday,
        gender,
      },
    },
  });

  return { data, error };
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
