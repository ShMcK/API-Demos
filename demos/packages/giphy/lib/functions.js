reformatRandomImage = function reformatRandomImage(data) {
  switch (settings.size) {
    case 'original':
      return {
        url: data.image_original_url,
        width: data.image_width,
        height: data.image_height
      };
      break;
    case 'downsized':
      return {
        url: data.fixed_height_small_url,
        width: data.fixed_height_small_width,
        height: data.fixed_height_small_height
      };
      break;
    case 'fixed':
      return {
        url: data.fixed_height_downsampled_url,
        width: data.fixed_height_downsampled_width,
        height: data.fixed_height_downsampled_height
      };
      break;
    default:
      throw 'Not a valid settings size for images';
  }
};

getTheme = function getTheme() {
  return settings.useTheme
    ? settings.theme + ' '
    : '';
};