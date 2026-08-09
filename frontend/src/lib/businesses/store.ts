"use client";

import { useSyncExternalStore } from "react";

import {
  businessLogoColors,
  createDefaultBusinessProfile,
  demoBusinesses,
} from "@/config/businesses";
import type { Business, BusinessInput } from "@/types/business";

let businesses: Business[] = demoBusinesses.map((business) => ({ ...business }));
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

function getSnapshot() {
  return businesses;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) {
    return "EM";
  }
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }
  return `${parts[0][0] ?? ""}${parts[1][0] ?? ""}`.toUpperCase();
}

function nextId() {
  const stamp = Date.now().toString(36);
  return `biz_${stamp}`;
}

function todayIsoDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function useBusinesses() {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}

export function useBusiness(id: string) {
  const all = useBusinesses();
  return all.find((business) => business.id === id) ?? null;
}

export function getBusinessById(id: string) {
  return businesses.find((business) => business.id === id) ?? null;
}

export function createBusiness(input: BusinessInput): Business {
  const created: Business = {
    id: nextId(),
    ...createDefaultBusinessProfile(input),
    ...input,
    createdAt: todayIsoDate(),
    logoInitials: getInitials(input.name),
    logoColor:
      businessLogoColors[businesses.length % businessLogoColors.length],
  };

  businesses = [created, ...businesses];
  emit();
  return created;
}

export function updateBusiness(
  id: string,
  input: BusinessInput,
): Business | null {
  const index = businesses.findIndex((business) => business.id === id);
  if (index === -1) {
    return null;
  }

  const current = businesses[index];
  const updated: Business = {
    ...current,
    ...input,
    logoInitials: getInitials(input.name),
  };

  businesses = [
    ...businesses.slice(0, index),
    updated,
    ...businesses.slice(index + 1),
  ];
  emit();
  return updated;
}

export function deleteBusiness(id: string): boolean {
  const next = businesses.filter((business) => business.id !== id);
  if (next.length === businesses.length) {
    return false;
  }
  businesses = next;
  emit();
  return true;
}
