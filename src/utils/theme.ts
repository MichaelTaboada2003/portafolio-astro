/**
 * Resuelve el tema inicial basándose en el valor almacenado en localStorage
 * y la preferencia del sistema operativo.
 *
 * @param stored - Valor almacenado en localStorage ('dark', 'light', o null)
 * @param prefersDark - Si el SO prefiere el tema oscuro (matchMedia result)
 * @returns 'dark' o 'light'
 */
export function resolveInitialTheme(
  stored: string | null,
  prefersDark: boolean
): 'dark' | 'light' {
  if (stored === 'dark' || stored === 'light') {
    return stored;
  }
  return prefersDark ? 'dark' : 'light';
}

/**
 * Devuelve el tema opuesto al actual.
 *
 * @param current - Tema actual ('dark' o 'light')
 * @returns El tema opuesto
 */
export function getNextTheme(current: 'dark' | 'light'): 'dark' | 'light' {
  return current === 'dark' ? 'light' : 'dark';
}
