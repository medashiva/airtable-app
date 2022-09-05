
import OrdersData from '../components/Table'
import OrdersCards from '../components/Cards'
import { AppBar, IconButton, Typography, Toolbar } from '@mui/material'

function Dashboard({ ordersdata }) {

    return (
        <div>
            {ordersdata &&
                <div>
                    <AppBar position="static">
                        <Toolbar variant="dense">
                            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>

                            </IconButton>
                            <Typography variant="h6" color="inherit" component="div">
                                Dashboard
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <OrdersCards count={ordersdata.total_orders} title={'Total Orders'} />
                    <OrdersCards count={ordersdata.revenue} title={'Total Revenue '} />
                    <OrdersCards count={ordersdata.total_inprogress_orders} title={'Total In-Progress Orders'} />
                    <OrdersCards count={ordersdata.total_orders_this_month} title={'Current Month Orders'} />
                    <br></br>
                    <br></br>
                    <Typography variant="h6" color="inherit" sx={{ marginLeft: '15px' }}>
                        Recent Orders
                    </Typography>
                    <OrdersData data={ordersdata.recent_orders} />
                </div>

            }
        </div>
    );
}

export default Dashboard;