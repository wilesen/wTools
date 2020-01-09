/*
 * @Author: tingzi.wen
 * @Date: 2020-01-08 14:40:24
 * @Last Modified by: tingzi.wen
 * @Last Modified time: 2020-01-09 17:16:14
 * @descript:用于国际化手机号规则校验
 */
const phoneRegExpList = [
  {
    displayName: '+86',
    regexp:
      '^(0086-){0,1}((13[0-9])|(14[579])|(15[0-9])|(16[567])|(18[0-9])|(17[0-8])|(19[189]))\\d{8}$',
    zone: '0086',
    zoneName: '中国大陆',
  },
  {
    displayName: '+852',
    regexp: '^(00852-)(5|6|8|9)\\d{7}$',
    zone: '00852',
    zoneName: '中国香港',
  },
  {
    displayName: '+853',
    regexp: '^(00853-6)\\d{7}$',
    zone: '00853',
    zoneName: '中国澳门',
  },
  {
    displayName: '+886',
    regexp: '^(00886-09)\\d{8}$',
    zone: '00886',
    zoneName: '中国台湾',
  },
  {
    displayName: '+971',
    regexp: '^00971-0?5(0|2|5|6)\\d{7}$',
    zone: '00971',
    zoneName: '阿联酋',
  },
  {
    displayName: '+61',
    regexp: '^0061-0?[45]\\d{8}$',
    zone: '0061',
    zoneName: '澳大利亚',
  },
  {
    displayName: '+670',
    regexp: '^00670-7\\d{7}$',
    zone: '00670',
    zoneName: '东帝汶',
  },
  {
    displayName: '+63',
    regexp: '^0063-0?9\\d{9}$',
    zone: '0063',
    zoneName: '菲律宾',
  },
  {
    displayName: '+82',
    regexp: '^0082-0?1\\d{9}$',
    zone: '0082',
    zoneName: '韩国',
  },
  {
    displayName: '+1',
    regexp: '^001-[1-9]\\d{9}$',
    zone: '001',
    zoneName: '加拿大',
  },
  {
    displayName: '+855',
    regexp: '^00855-0?85\\d{6}$',
    zone: '00855',
    zoneName: '柬埔寨',
  },
  {
    displayName: '+856',
    regexp: '^00856-0?20\\d{7,8}$',
    zone: '00856',
    zoneName: '老挝',
  },
  {
    displayName: '+60',
    regexp: '^0060-0?1(([02346789]\\d{7})|(1\\d{8}))$',
    zone: '0060',
    zoneName: '马来西亚',
  },
  {
    displayName: '+1',
    regexp: '^001-[1-9]\\d{9}$',
    zone: '001',
    zoneName: '美国',
  },
  {
    displayName: '+95',
    regexp: '^0095-0?[1-9]\\d{9}$',
    zone: '0095',
    zoneName: '缅甸',
  },
  {
    displayName: '+81',
    regexp: '^0081-0?[1-9]\\d{9}$',
    zone: '0081',
    zoneName: '日本',
  },
  {
    displayName: '+66',
    regexp: '^0066-0?[1-9]\\d{8}$',
    zone: '0066',
    zoneName: '泰国',
  },
  {
    displayName: '+673',
    regexp: '^00673-((22[89])|(71\\d)|(72[0-3])|(8[1236789]\\d))\\d{4}$',
    zone: '00673',
    zoneName: '文莱',
  },
  {
    displayName: '+34',
    regexp: '^0034-[6-7]\\d{8}$',
    zone: '0034',
    zoneName: '西班牙',
  },
  {
    displayName: '+65',
    regexp: '^0065-[89]\\d{7}$',
    zone: '0065',
    zoneName: '新加坡',
  },
  {
    displayName: '+64',
    regexp: '^0064-0?2[012579]\\d{7,8}$',
    zone: '0064',
    zoneName: '新西兰',
  },
  {
    displayName: '+62',
    regexp: '^0062-0?8\\d{8,10}$',
    zone: '0062',
    zoneName: '印度尼西亚',
  },
  {
    displayName: '+44',
    regexp: '^0044-0?7\\d{9}$',
    zone: '0044',
    zoneName: '英国',
  },
  {
    displayName: '+84',
    regexp: '^0084-0?[1-9]\\d{9}$',
    zone: '0084',
    zoneName: '越南',
  },
];

function checkMobileRegExp(zone = '0086') {
  const chooseItem = phoneRegExpList.filter(i => {
    i.zone == zone;
  });

  return chooseItem[0].regexp;
}

export default checkMobileRegExp;
