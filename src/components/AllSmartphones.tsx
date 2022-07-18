import { ISmartphone, SmartphoneItem } from "./SmartphoneItem";

interface IAllSmartphones {
  smartphones: ISmartphone[];
}

export const AllSmartphones = ({ smartphones }: IAllSmartphones) => (
  <>
    {smartphones.map((smartphone) => (
      <SmartphoneItem data={smartphone} key={smartphone.id} />
    ))}
  </>
);
