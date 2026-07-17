import bcrypt from "bcryptjs";

import type {
  AuthUser,
  LoginCredentials,
  RegisterCredentials,
  UserRole,
} from "@/types/auth";

type StoredUser = AuthUser & {
  passwordHash: string;
};

const mockUsers: StoredUser[] = [];

let initialized = false;

type SeedUser = {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  password: string;
};

async function seedMockUsers(): Promise<void> {
  if (initialized) {
    return;
  }

  const seeds: SeedUser[] = [
    {
      id: "usr_admin_001",
      email: "admin@artudmidas.com",
      name: "Admin User",
      role: "admin",
      password: "Admin123!",
    },
    {
      id: "usr_staff_001",
      email: "staff@artudmidas.com",
      name: "Staff User",
      role: "staff",
      password: "Staff123!",
    },
    {
      id: "usr_owner_001",
      email: "owner@artudmidas.com",
      name: "Business Owner",
      role: "business_owner",
      password: "Owner123!",
    },
  ];

  for (const seed of seeds) {
    mockUsers.push({
      id: seed.id,
      email: seed.email.toLowerCase(),
      name: seed.name,
      role: seed.role,
      passwordHash: await bcrypt.hash(seed.password, 12),
    });
  }

  initialized = true;
}

function toPublicUser(user: StoredUser): AuthUser {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
  };
}

export async function mockLogin(
  credentials: LoginCredentials,
): Promise<AuthUser | null> {
  await seedMockUsers();

  const user = mockUsers.find(
    (entry) => entry.email === credentials.email.toLowerCase(),
  );

  if (!user) {
    return null;
  }

  const valid = await bcrypt.compare(credentials.password, user.passwordHash);
  return valid ? toPublicUser(user) : null;
}

export async function mockRegister(
  credentials: RegisterCredentials,
  role: UserRole = "business_owner",
): Promise<AuthUser> {
  await seedMockUsers();

  const email = credentials.email.toLowerCase();
  const existing = mockUsers.find((entry) => entry.email === email);

  if (existing) {
    throw new Error("An account with this email already exists");
  }

  const user: StoredUser = {
    id: `usr_${Date.now()}`,
    email,
    name: credentials.name.trim(),
    role,
    passwordHash: await bcrypt.hash(credentials.password, 12),
  };

  mockUsers.push(user);
  return toPublicUser(user);
}

export async function mockForgotPassword(email: string): Promise<boolean> {
  await seedMockUsers();
  return mockUsers.some((entry) => entry.email === email.toLowerCase());
}
