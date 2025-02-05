import mainStyle from './Main.module.css'
import Header from '../../components/Header/Header'
import Button from '../../components/Button/Button'
import { Animals, MainProps } from '../../Interface/interface';
import { useEffect, useState } from 'react';
import Alert from '../../components/popup/Alert';
// import { useNavigate } from 'react-router-dom';


export default function Main(props: MainProps) {
    
    // const navigation = useNavigate();
    const dataString: string | null = localStorage.getItem("Animals");
    const animObj: Animals = dataString ? JSON.parse(dataString) : {};

    
    // const props.addAnimals = () => {
    //     return navigation('/form');
    // }

    const [alerts, setalert] = useState<boolean>(false);
    const [detailProp, setDetailProp] = useState<boolean>(false);
    const [confirmRmv, setConfirmRmv] = useState<boolean>(false);
    const [removeIndex, setRemoveIndex] = useState<string>();
    const [eachAnim, setEachAnim] = useState<Animals>();


    const alertMessage = (name: string | undefined): void => {
        console.log("Hi");
        setRemoveIndex(name)
        setalert(true);
    }

    const removeAnimal = (name: string | undefined) => {
        if (name !== undefined)
            delete animObj[name as keyof typeof animObj];
        localStorage.setItem('Animals', JSON.stringify(animObj, null, 4));
    }

    useEffect(() => {
        if (confirmRmv) {

            removeAnimal(removeIndex);
        }
    })

    const singleAnimObj = (animal: Animals): void => {
        setEachAnim(animal);
    }

    const createAnimals = () => {
        const mapObj = new Map(Object.entries(animObj))
        return Array.from(mapObj.entries()).map(([key, animal], index) => (
            <li className={mainStyle.eachAnimal} key={key}>
                <div className={mainStyle.firstHalf}>
                    <p className={mainStyle.detailsEachAnim}>{index + 1}</p>
                    <p onClick={() => { setDetailProp(true); singleAnimObj(animal) }} className={`${mainStyle.detailsEachAnim} ${mainStyle.detailsEachAnimName}`}>{animal?.Name}</p>
                    <p className={mainStyle.detailsEachAnim}>{animal?.FoodChain}</p>
                    <p className={mainStyle.detailsEachAnim}>{animal?.Type}</p>
                </div>
                <div className={mainStyle.secondHalf}>
                    <Button event={() => { alertMessage(animal?.Name); }} animate={true} height={"40%"} width={"50%"} back={"transparent"} color={"white"} icon={"fa-solid fa-trash-can"} border={"none"} radius={".3vh"} />
                </div>
            </li>
        ));
    }
    return (
        <div className={mainStyle.wholeContainer}>
            {(alerts) ? <Alert content={`Are you sure want to \n remove the Animal?`} setalert={setalert} setConfirmRmv={setConfirmRmv} /> : ""}
            {(detailProp) ? <Alert eachAnim={eachAnim} detailProp={detailProp} setDetailProp={setDetailProp} setalert={setalert} setConfirmRmv={setConfirmRmv} /> : ""}
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
                                <Button event={props.addAnimals} height={"2vw"} width={"5vw"} content={"Add"} border={"none"} radius={".25em"} />
                            </div>
                        </div> :

                        <div className={mainStyle.noAnimalsDisplayArea}>
                            <div className={mainStyle.addButtonContainer}>
                                <Button event={props.addAnimals} back={"#0088CC"} color={"white"} size={"1em"} content={"Add"} top={"4%"} right={"2%"} height={"25%"} width={"5%"} border={"none"} radius={".5vh"} />
                            </div>

                            <div className={mainStyle.addedAnimalsContainer}>
                                <ul className={mainStyle.eachAnimalOuter}>
                                    {(Object.keys(animObj).length !== 0 || dataString) ? <li className={mainStyle.eachAnimalHead}>
                                        <div className={mainStyle.firstHalf}>
                                            <p className={mainStyle.detailsEachAnim}>S.N0</p>
                                            <p className={`${mainStyle.detailsEachAnim} ${mainStyle.detailsEachAnimName}`}>Name</p>
                                            <p className={mainStyle.detailsEachAnim}>Food Chain</p>
                                            <p className={mainStyle.detailsEachAnim}>Type</p>
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
