import { memo } from "react";

const Home = () => {

    return(
        <div>
            <div>
                <p>Month: August</p>
                <div>
                    <p>Gastos: 745.45</p>
                    <p>Receita: 2548.59</p>
                    <p>Investimentos: 558.45</p>
                </div>
            </div>

            <div>
                <p>Year: 2021</p>
                <div>
                    <p>Gastos: 4548.48</p>
                    <p>Receita: 8545.54</p>
                    <p>Investimentos: 4144.45</p> 
                </div>
            </div>
        </div>
    )
}

export default memo(Home);