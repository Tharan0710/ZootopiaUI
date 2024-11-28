import formStyle from './Form.module.css'
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { Animal, Animals, StyleProp } from '../../Interface/interface';

export default function Form(props: StyleProp) {

  const navigation = useNavigate();
  const location = useLocation();

  const Name = useRef<HTMLInputElement | null>(null);
  const Type = useRef<HTMLInputElement | null>(null);
  const Habitat = useRef<HTMLInputElement | null>(null);
  const FoodChain = useRef<HTMLInputElement | null>(null);
  const CanFly = useRef<HTMLInputElement>(null);
  const HasFur = useRef<HTMLInputElement>(null);

  const cancelCreateAnimal = (): void => {
    navigation('/');
  }

  const animalDetailFunc = (): void => {
    if ((Name.current?.value !== "") && (Type.current?.value !== "") && (Habitat.current?.value !== "") && (FoodChain.current?.value !== "") && (CanFly.current?.value !== "") && (HasFur.current?.value !== "")) {
      const keyName: string | undefined = Name.current?.value;
      const getCanFly: boolean = CanFly?.current?.checked ? true : false;
      const getHasFur: boolean = HasFur?.current?.checked ? true : false;
      const structuredDetails: Animals = {
        Name: Name.current?.value,
        Type: Type.current?.value,
        Habitat: Habitat.current?.value,
        FoodChain: FoodChain.current?.value,
        "Can Fly": getCanFly,
        "Has Fur": getHasFur,
      };

      let storedData: string | null = localStorage.getItem("Animals");
      let dataObj: Animal = {};

      if (storedData)
        dataObj = JSON.parse(storedData);

      // !(location.state) ? dataObj.push(structuredDetails) : dataObj.splice(location.state.editDataIndex, 1, structuredDetails);
      if (keyName !== undefined)
        dataObj[keyName] = structuredDetails;
      localStorage.setItem("Animals", JSON.stringify(dataObj));

      console.log(dataObj);
      // navigation("/", { state: { data: structuredDetails } });
    } else {
      alert("All Inputs required !");
    }
  }

  // useEffect(() => {
  //   if (location.state) {
  //     if (location.state.editData) {
  //       console.log("success!!")
  //       Name.current?.value = location.state.editData.Name;
  //       Type.current?.value = location.state.editData.Age;
  //       Habitat.current?.value = location.state.editData.ID;
  //       FoodChain.current?.value = location.state.editData.Mobile;
  //       CanFly.current?.value = location.state.editData.Place;
  //       HasFur.current?.value = location.state.editData.Salary;
  //     }
  //   }
  //   else {
  //     Name.current?.value = "";
  //     Type.current?.value = "";
  //     Habitat.current?.value = "ZSTK";
  //     FoodChain.current?.value = "";
  //     CanFly.current?.value = "";
  //     HasFur.current?.value = "";
  //   }

  // })

  return (
    <div className={formStyle.formWholeContainer}>
      <Header icon={"fa-solid fa-dragon"} content={"Zootopia"} />

      <div className={formStyle.menu}>
        <p className={formStyle.menuAttributes}>Animals</p>
      </div>

      <div className={formStyle.animalsDetailsContain}>
        <div className={formStyle.formInputDetails} >
          <div className={formStyle.halfFormDetails}>
            <div className={formStyle.inputTagsContain}>
              <label className={formStyle.fieldLable}>Name</label>
              <input ref={Name} className={formStyle.inputTags} type='text' />
            </div>

            <div className={formStyle.inputTagsContain}>
              <label className={formStyle.fieldLable}>Habitat</label>
              <input ref={Habitat} className={formStyle.inputTags} type='text' />
            </div>

            <div className={formStyle.inputTagsContain}>
              <input ref={CanFly} className={formStyle.checkBox} type='checkbox' />
              <label className={formStyle.fieldLable}>Can Fly</label>
            </div>
          </div>

          <div className={formStyle.halfFormDetails}>
            <div className={formStyle.inputTagsContain}>
              <label className={formStyle.fieldLable}>Type</label>
              <input ref={Type} className={formStyle.inputTags} type='text' />
            </div>

            <div className={formStyle.inputTagsContain}>
              <label className={formStyle.fieldLable}>Food Chain</label>
              <input ref={FoodChain} className={formStyle.inputTags} type='text' />
            </div>

            <div className={formStyle.inputTagsContain}>
              <input ref={HasFur} className={formStyle.checkBox} type='checkbox' />
              <label className={formStyle.fieldLable}>Has Fur</label>
            </div>
          </div>
        </div>

        <div className={formStyle.formButtonsContainer}>
          <div className={formStyle.formButtonInnerContain}>
            <Button event={() => { cancelCreateAnimal(); }} content={"Cancel"} size={"1rem"} right={"5%"} height={"20%"} width={"25%"} border={"none"} radius={".5vh"} />
            <Button event={() => { animalDetailFunc(); }} content={"Submit"} size={"1rem"} right={"5%"} height={"20%"} width={"25%"} border={"none"} radius={".5vh"} />
          </div>
        </div>
      </div>

    </div>
  )
}
