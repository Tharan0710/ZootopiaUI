import mainStyle from './Main.module.css'
import Header from '../../components/Header/Header'
import Button from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'
import { Animals } from '../../Interface/interface';
import { useEffect, useState } from 'react';
import Alert from '../../components/popup/Alert';

export default function Main() {

    const navigation = useNavigate();

    const dataString: string | null = localStorage.getItem("Animals");
    const animObj: Animals = dataString ? JSON.parse(dataString) : {};

    const addAnimals = (): void => {
        navigation('/form')
    }
    
    const [alert, setalert] = useState<boolean>(false);
    const [confirmRmv, setConfirmRmv] = useState<boolean>(false);
    const [removeIndex, setRemoveIndex] = useState<string>();


    const alertMessage = (name: string | undefined): void => {
        setRemoveIndex(name)
        setalert(true);
        setConfirmRmv(true);
    }

    const removeEmployee = (name: string | undefined) => {
        if (name !== undefined)
            delete animObj[name as keyof typeof animObj];
        localStorage.setItem('Animals', JSON.stringify(animObj, null, 4));
    }

    useEffect(() => {
        if (confirmRmv) {
            removeEmployee(removeIndex);
        }
    })

    const createAnimals = () => {
        const mapObj = new Map(Object.entries(animObj))
        return Array.from(mapObj.entries()).map(([key, animal], index) => (
            <li className={mainStyle.eachAnimal} key={animal?.Name}>
                <div className={mainStyle.firstHalf}>
                    <p className={mainStyle.detailsEachAnim}>{index + 1}</p>
                    <p className={`${mainStyle.detailsEachAnim} ${mainStyle.detailsEachAnimName}`}>{animal?.Name}</p>
                    <p className={mainStyle.detailsEachAnim}>{animal?.FoodChain}</p>
                    <p className={mainStyle.detailsEachAnim}>{animal?.Type}</p>
                    {/* <p className={mainStyle.detailsEachAnim}>{animal?.Habitat}</p>
                    <p className={mainStyle.detailsEachAnim}>{(animal?.['Can Fly'] === true) ? "Yes" : "No"}</p>
                    <p className={mainStyle.detailsEachAnim}>{(animal?.['Has Fur'] === true) ? "Yes" : "No"}</p> */}
                </div>
                <div className={mainStyle.secondHalf}>
                    <Button event={() => { alertMessage(animal?.Name); }} animate={true} height={"40%"} width={"50%"} back={"transparent"} color={"white"} icon={"fa-solid fa-trash-can"} border={"none"} radius={".3vh"} />
                </div>
            </li>
        ));
    }
    return (
        <div className={mainStyle.wholeContainer}>
            {(alert) ? <Alert setalert={setalert} setConfirmRmv={setConfirmRmv} /> : ""}
            <Header icon={"fa-solid fa-dragon"} content={"Zootopia"} />
            <div className={mainStyle.mainContain}>
                <div className={mainStyle.menu}>
                    <p className={mainStyle.menuAttributes}>Animals</p>
                </div>

                {
                    (Object.keys(animObj).length === 0 || !dataString) ?
                        <div className={mainStyle.noAnimalsDisplayArea}>
                            <div className={mainStyle.innerAnimalsMessage} >
                                <h2 className={mainStyle.message}>No Animals Found</h2>
                                <p className={mainStyle.message}>click the below button to add Animals</p>
                                <Button event={addAnimals} height={"2vw"} width={"5vw"} content={"Add"} border={"none"} radius={".25em"} />
                            </div>
                        </div> :

                        <div className={mainStyle.noAnimalsDisplayArea}>
                            <div className={mainStyle.addButtonContainer}>
                                <Button event={addAnimals} back={"#0088CC"} color={"white"} size={"1em"} content={"Add"} top={"4%"} right={"2%"} height={"25%"} width={"5%"} border={"none"} radius={".5vh"} />
                            </div>

                            <div className={mainStyle.addedAnimalsContainer}>
                                <ul className={mainStyle.eachAnimalOuter}>
                                    {(Object.keys(animObj).length !== 0 || dataString) ? <li className={mainStyle.eachAnimalHead}>
                                        <div className={mainStyle.firstHalf}>
                                            <p className={mainStyle.detailsEachAnim}>S.N0</p>
                                            <p className={`${mainStyle.detailsEachAnim} ${mainStyle.detailsEachAnimName}`}>Name</p>
                                            <p className={mainStyle.detailsEachAnim}>Food Chain</p>
                                            <p className={mainStyle.detailsEachAnim}>Type</p>
                                            {/* <p className={mainStyle.detailsEachAnim}>Habitat</p>
                                    <p className={mainStyle.detailsEachAnim}>Can Fly</p>
                                    <p className={mainStyle.detailsEachAnim}>Has Fur</p> */}
                                        </div>
                                    </li> : ""}
                                    {createAnimals()}
                                </ul>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}
