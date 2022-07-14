import React from 'react'
import styled from 'styled-components'
import { orders } from '../../data'
import OrderItem from './OrderItem'

const Delivered = () => {
  return (
    <Container>
      {orders.map(
        (order) => order.status === 'Delivered' && <OrderItem order={order} key={order.id} />,
      )}
    </Container>
  )
}

const Container = styled.div`
  padding: 10px;
`

export default Delivered
