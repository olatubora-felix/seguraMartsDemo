import React from 'react'
import styled from 'styled-components'
import { orders } from '../../data'
import EmptyOrder from './EmptyOrder'
import OrderItem from './OrderItem'

const OnGoing = () => {
  const empty = true
  return (
    <Container>
      {empty ? (
        <EmptyOrder />
      ) : (
        orders.map(
          (order) => order.status === 'Ongoing' && <OrderItem order={order} key={order.id} />,
        )
      )}
    </Container>
  )
}

const Container = styled.div`
  padding: 10px;
`

export default OnGoing
