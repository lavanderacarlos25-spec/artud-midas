import { authError, authSuccess } from "@/lib/auth/api-utils";
import { getSessionUser } from "@/lib/auth/session";

export async function GET() {
  const user = await getSessionUser();

  if (!user) {
    return authError("Unauthorized", 401);
  }

  return authSuccess({ user });
}
