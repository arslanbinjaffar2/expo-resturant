import React ,{ ComponentType, createElement, Fragment } from "react";
import Icocall from '@/assets/icons/Icocall'
import Icointernet from '@/assets/icons/Icointernet'
import Icomail from '@/assets/icons/Icomail'
import Icodelete from '@/assets/icons/Icodelete'
import Icodropdown from '@/assets/icons/Icodropdown'
import Icofilter from '@/assets/icons/Icofilter'
import Icoautonew from '@/assets/icons/Icoautonew'
import Icoedit from '@/assets/icons/Icoedit'
import IcoTrophy from '@/assets/icons/IcoTrophy'
import Icolocalmallbag from '@/assets/icons/Icolocalmallbag'
import Icoschedule from '@/assets/icons/Icoschedule'
import Icoreviews from '@/assets/icons/Icoreviews'
import Icoassignment from '@/assets/icons/Icoassignment'
import Icoinfo from '@/assets/icons/Icoinfo'
import Icovoucher from '@/assets/icons/Icovoucher'
import Icoheart from '@/assets/icons/Icoheart'
import Icogrid from '@/assets/icons/Icogrid'
import Icolist from '@/assets/icons/Icolist'





interface IconProps {
  color?: string;
  width?: number;
  height?: number;
}

type IconType =
    "Icocall"|
    "Icointernet"|
    "Icomail" |
    "Icodelete"|
    "Icodropdown"|
    "Icofilter"|
    "Icoautonew"|
    "Icoedit"|
    "IcoTrophy"|
    "Icolocalmallbag" |
    "Icoschedule" |
    "Icoheart" |
    "Icoassignment"  |
    "Icoinfo"  |
    "Icovoucher"  |
    "Icoassignment"  |
    "Icoreviews"  |
    "Icogrid" |
    "Icolist" |
    any; 

const icons: Record<IconType, ComponentType<IconProps>> = { 
  Icocall,
  Icointernet,
  Icomail,
  Icodelete,
  Icodropdown,
  Icofilter,
  Icoautonew,
  Icoedit,
  IcoTrophy,
  Icolocalmallbag,
  Icoschedule,
  Icoreviews,
  Icoheart,
  Icoassignment,
  Icovoucher,
  Icoinfo,
  Icogrid,
  Icolist
};

const DynamicIcons = ({iconType,iconProps}:{iconType:IconType,iconProps?:IconProps}) => {
  return (
    <Fragment>
      {icons[iconType] && createElement(icons[iconType], iconProps)}
    </Fragment>
  );
};

export default DynamicIcons;