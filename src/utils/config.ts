export interface ConfigInfo {
  title?: string;
  subtitle?: string;
  intro1?: string;
  intro2?: string;
  sequence?: string;
  intro3?: string;
  bioTitle?: string;
  bioText?: string;
  psychTitle?: string;
  psychText?: string;
  philoTitle?: string;
  philoText?: string;
}

export interface ConfigActivity {
  type: string;
  emoji: string;
  durationMinutes: number | null;
  cs: { name: string; description: string; variants?: string[] };
  en: { name: string; description: string; variants?: string[] };
}

export interface AppConfig {
  version: number;
  activities: ConfigActivity[];
  info: {
    cs: ConfigInfo;
    en: ConfigInfo;
  };
}

const CONFIG_URL = new URL('default-config.json', window.location.href).href;

let cachedConfig: AppConfig | null = null;

export async function loadConfig(): Promise<AppConfig> {
  if (cachedConfig) return cachedConfig;
  try {
    const res = await fetch(CONFIG_URL);
    cachedConfig = await res.json();
    return cachedConfig!;
  } catch {
    return { version: 1, activities: [], info: { cs: {}, en: {} } };
  }
}

export function getCachedConfig(): AppConfig | null {
  return cachedConfig;
}
