import { addClass } from './utils';
/* -------------------------------------------------------------------------- */
/*                                  Detector                                  */
/* -------------------------------------------------------------------------- */

const detectorInit = () => {
  const html = document.querySelector('html');
  const ua = navigator.userAgent;
  const platform = navigator.platform;
  if (/OPR\//.test(ua)) addClass(html, 'opera');
  if (/Mobi|Android/i.test(ua)) addClass(html, 'mobile');
  if (/Firefox\//.test(ua)) addClass(html, 'firefox');
  if (/Safari\//.test(ua) && !/Chrome\//.test(ua)) addClass(html, 'safari');
  if (/iPad|iPhone|iPod/.test(ua)) addClass(html, 'ios');
  if (/iPhone/.test(ua)) addClass(html, 'iphone');
  if (/iPad/.test(ua)) addClass(html, 'ipad');
  if (/MSIE |Trident\//.test(ua)) addClass(html, 'ie');
  if (/Edg\//.test(ua)) addClass(html, 'edge');
  if (/Chrome\//.test(ua) && !/Edg\//.test(ua)) addClass(html, 'chrome');
  if (/Mac/.test(platform)) addClass(html, 'osx');
  if (/Win/.test(platform)) addClass(html, 'windows');
  if (/CriOS/.test(ua)) addClass(html, 'chrome');
};

export default detectorInit;
