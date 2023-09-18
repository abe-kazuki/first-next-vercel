'use client';
import { reqAlcohols, Alcohols} from '../lib/AlcoholaJsonPlaceholder';
import { SampleCard, FadeIn } from './../components/sample_cell';
import { SuccessResult, FailResult } from './../service/api';
import {FC, useState, useEffect} from 'react';

export type Props = {
    category_id: number;
  }


export const Grid: FC<Props> =  (prop: Props) => {
    const [alcohols, setResult] = useState<Alcohols>([])
    useEffect(() => {
        const reqPostsResult = reqAlcohols.get(prop.category_id)
        reqPostsResult?.then(
            (res: SuccessResult<Alcohols> | FailResult<Alcohols>) => {
                const result: Alcohols = (res as SuccessResult<Alcohols> ).response.data
                setResult(result)
            })
      }, []);


    //const reqPostsResult: Alcohols = ((await reqAlcohols.get(prop.category_id)) as SuccessResult<Alcohols>).response.data
    return (
        <div className="grid">
            {
                alcohols?.map(({ meigaraId, osakeName, imagePath, nomikata }, index) => 
                    (
                    <div key={meigaraId}>
                        <FadeIn duration={index*1.2}>
                        <SampleCard title={osakeName} imagePath={imagePath} nomikatas={nomikata} meigaraId={meigaraId}/>
                        </FadeIn>
                    </div>
                    )
                )
            }
      </div>
    )
}