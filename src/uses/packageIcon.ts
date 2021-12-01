export function usePackageIcon(icon: string | void, section: string) {
  const packageIcon = ref<string>("/src/assets/icons/unknown.png");
  if (icon?.match(/https?:\/\//)) {
    packageIcon.value = icon;
  } else {
    import(`/src/assets/icons/${section}.png`).then((res) => {
      packageIcon.value = res.default;
    });
  }

  return packageIcon;
}
