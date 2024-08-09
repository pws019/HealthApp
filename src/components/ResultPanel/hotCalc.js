export const getBaseMetabolism = ({
  weight,
  height,
  age,
  sex
}) => {
  if(sex === 'male') {
    // return 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
    return 10 * weight + 6.25 * height - 5.0 * age + 5;
  } 
  if(sex === 'female') {
    return 10 * weight + 6.25 * height - 5 * age - 161;
  }
}

export const getDayEnergyConsum = (base, ratio) => {
  return base * ratio;
}

export const getEatEnergy = (dayConsum, gapRatio) => {
  return dayConsum * (1 - gapRatio);
}

export const getReulst = (dayConsum, dateType) => {
  const dateNutritionMap = {
    A: [0, 0.35, 0.65],
    B: [0.1, 0.35, 0.55],
    C: [0.3, 0.35, 0.35],
    D: [0.55, 0.35, 0.1],
  }

  const nutritionList = dateNutritionMap[dateType];

  return nutritionList.map(ratio => (dayConsum * ratio).toFixed(2));
}

export default {};