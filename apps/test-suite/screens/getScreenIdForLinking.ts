const SEPARATOR = ' ';

/**
 * for the "APIs" tab in Bare-Expo:
 * in ExpoApisStackNavigator.tsx (ScreensList) you may specify a `name` and optional `route`. By default, `name` is used.
 *
 * for the "Tests" tab in Bare-Expo: in the test screens in apps/test-suite/tests you may specify (export const ...):
 * - `name`: visible in the list
 * - `route`: string used for deep linking (by default, `name` is used)
 * */
export const getScreenIdForLinking = ({
  name,
  route,
}: {
  name: string;
  route?: string;
}): string => {
  const id = (route ?? name).trim().toLowerCase();
  if (!id || id.includes(SEPARATOR)) {
    console.error(
      `The screen linking id "${id}" from name "${name}" is invalid. It needs to be a nonempty string with no separator: "${SEPARATOR}".`
    );
  }
  return id;
};

export function createQueryString(tests: string[]): string {
  if (!Array.isArray(tests) || !tests.every((v) => typeof v === 'string')) {
    throw new Error(
      `test-suite: Cannot create query string for runner. Expected array of strings, instead got: ${tests}`
    );
  }
  const uniqueTests = Array.from(new Set(tests).values());
  // Skip encoding or React Navigation will encode twice
  return uniqueTests.map((it) => it.trim().toLowerCase()).join(SEPARATOR);
}

export function getSelectedTestNames(selectionQuery: string): string[] {
  return selectionQuery.split(SEPARATOR).map((v) => v.trim().toLowerCase());
}
