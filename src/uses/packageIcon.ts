import useAssetsIcon from "./useAssetsIcon";

const assets = import.meta.globEager("/src/assets/icons/*.png");

export function usePackageIcon(icon: string | void, section: string) {
  const packageIcon = useAssetsIcon("unknown.png");

  if (icon?.match(/https?:\/\//)) {
    return icon;
  } else {
    for (const key in assets) {
      if (key.endsWith(`/${section}.png`)) {
        return assets[key].default as unknown as string;
      }
    }
  }

  return packageIcon;
}
