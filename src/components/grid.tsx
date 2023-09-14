'use client';
import { reqAlcohols, fetch_alcohols, Alcohols, Alcohol, Nomikatas, Nomikata} from './../lib/getJsonPlaceholder';
import { SampleCard, FadeIn } from './../components/sample_cell';
import { SuccessResult, FailResult } from './../service/api';
import {FC, useState, useEffect} from 'react';

export type Props = {
    category_id: number;
  }


export const Grid: FC<Props> =  (prop: Props) => {
    //const reqPostsResult = reqAlcohols.get(prop.category_id)
    //csrになるので反映されない
    const [alcohols, setResult] = useState<Alcohols>([])
    useEffect(() => {
        const reqPostsResult = reqAlcohols.get(prop.category_id)
        console.log("reqPostsResult叩くよ")
        reqPostsResult?.then(
            (res: SuccessResult<Alcohols> | FailResult<Alcohols>) => {
                const result: Alcohols = (res as SuccessResult<Alcohols> ).response.data
                setResult(result)
                console.log("resultしているよ")
            })    
      }, []);


    //const reqPostsResult: Alcohols = ((await reqAlcohols.get(prop.category_id)) as SuccessResult<Alcohols>).response.data
    return (
        <div className="grid">
            {
                alcohols?.map(({ meigaraId, osakeName, imagePath, nomikata }, index) => 
                    (
                    <div key={meigaraId}>
                        <FadeIn duration={index*2.5}>
                        <SampleCard title={osakeName} imagePath={imagePath} nomikatas={nomikata} meigaraId={meigaraId}/>
                        </FadeIn>
                    </div>
                    )
                )
            }
      </div>
    )
}