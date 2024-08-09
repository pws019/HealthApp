import React, { useState } from 'react'
import NutrientCalc from '../NutrientCalc/NutrientCalc';
import {
  Grid,
  Button,
} from 'antd-mobile/2x';

export default function NutrientCalcContainer(props) {
  const [count, setCount] = useState(1)
  let i = 0;
  const res = [];
  while(i < count) {
    res.push(
      <NutrientCalc key={`form-${i}`}/>
    )
    i++;
  }

  res.push(
    <div style={{padding: '16px'}} key="last">
      <Grid  columns={2} gap={16}>
        <Grid.Item>
          <Button block type='submit' color='primary' size='large' onClick={() => { setCount(count+1) }}>
            加一项
          </Button>
        </Grid.Item>
        <Grid.Item>
          <Button block color='primary' size='large'  onClick={() => { setCount(count -1 ) }}>
            减一项
          </Button>
        </Grid.Item>
      </Grid>
    </div>
  )

  return res;
}