import React from 'react';
import { HiHome, HiUsers, HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import { LiaStoreSolid } from "react-icons/lia";
import { GrServices } from "react-icons/gr";
import { LuBoxes } from "react-icons/lu";
import { RiSettings5Fill, RiRefundFill, RiLayout5Fill, RiAddBoxFill, RiApps2Fill, RiStore3Fill, RiAddLine, RiPlayListAddLine, RiListCheck, RiCalendarEventLine } from "react-icons/ri";
import { TbTargetArrow, TbShoppingCartDown, TbShoppingCartCheck, TbShoppingCartX, TbShoppingCartDollar } from "react-icons/tb";
import { IoIosArrowUp, IoMdPricetag, IoMdSettings, IoIosArrowDown,IoIosArrowForward, IoMdHeartEmpty, IoMdCheckboxOutline } from "react-icons/io";
import { FaInbox } from "react-icons/fa6";
import { BsFillFileBarGraphFill } from "react-icons/bs";
import { BiSolidDiscount } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoDotFill } from "react-icons/go";
import { CiImageOff, CiHeart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { LuSettings2 } from "react-icons/lu";
import { MdCheckBoxOutlineBlank, MdAdd, MdUploadFile, MdAddBox  } from "react-icons/md";
import { MdOutlineArrowForwardIos,MdOutlineArrowBackIosNew } from "react-icons/md";

function IconComponent({ name, size = '1.5em', color = 'black', className = '' }) {
    const iconsRegistration = {
        HiHome,
        MdOutlineArrowForwardIos,
        MdOutlineArrowBackIosNew,
        RiAddBoxFill,
        MdAddBox,
        FaRegHeart,
        MdCheckBoxOutlineBlank,
        IoMdCheckboxOutline,
        CiImageOff,
        LuSettings2,
        MdAdd,
        MdUploadFile,
        IoMdHeartEmpty,
        CiHeart,
        FaInbox,
        GoDotFill,
        IoIosArrowForward,
        HiTrendingDown,
        HiTrendingUp,
        GiHamburgerMenu,
        IoMdSettings,
        IoIosArrowDown,
        IoIosArrowUp,
        BiSolidDiscount,
        BsFillFileBarGraphFill,
        IoMdPricetag,
        TbTargetArrow,
        LiaStoreSolid,
        RiStore3Fill,
        RiAddLine,
        RiPlayListAddLine,
        RiListCheck,
        RiCalendarEventLine,
        RiApps2Fill,
        RiLayout5Fill,
        RiRefundFill,
        GrServices,
        RiSettings5Fill,
        TbShoppingCartDown,
        TbShoppingCartCheck,
        TbShoppingCartX,
        LuBoxes,
        HiUsers,
        TbShoppingCartDollar
    };

    const Icon = iconsRegistration[name];

    if (!Icon) {
        console.error(`Icon '${name}' not found`);
        return null;
    }

    return <Icon size={size} color={color} className={className} />;
}

export default IconComponent;

