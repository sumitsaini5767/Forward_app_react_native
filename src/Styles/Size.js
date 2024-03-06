import { moderateScale, scale, verticalScale } from "./scaling";

export default {
  //padding
  ContainerPaddingVertical: verticalScale(33),
  ContainerPaddingHorizontal: moderateScale(23),
  inputFieldPadding: moderateScale(16),

  //font Size
  TitleFontSize: scale(22),
  paraFontSize: scale(13),

  //weight
  titleFontWeight: "600",
  BtnFontSize: scale(15),

  //borderradius
  inputFieldBorderRadius: moderateScale(8),

  //height
  inputHeight: verticalScale(48),
};
