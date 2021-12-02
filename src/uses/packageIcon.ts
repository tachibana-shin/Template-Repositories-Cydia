export function usePackageIcon(icon: string | void, section: string) {
  const packageIcon = ref<string>("../assets/icons/unknown.png");
  if (icon?.match(/https?:\/\//)) {
    packageIcon.value = icon;
  } else {
    import(/* @vite-ignore */ `../assets/icons/${section}.png`)
      .then((res) => {
        packageIcon.value = res.default;
      })
      .catch(() => {});
  }

  return packageIcon;
}
