import React from 'react'
import styled from 'styled-components'
import { orders } from '../../data'
import EmptyOrder from './EmptyOrder'
import OrderItem from './OrderItem'

const Cancelled = () => {
  const empty = true
  return (
    <Container>
      {empty ? (
        <EmptyOrder />
      ) : (
        orders.map(
          (order) => order.status === 'Cancelled' && <OrderItem order={order} key={order.id} />,
        )
      )}
    </Container>
  )
}

const Container = styled.div`
  padding: 10px;
`

export default Cancelled
