from flask import Flask
from flask import jsonify

from airtable import Airtable
from utils import AirOrders
from flask_cors import CORS

app = Flask(__name__)

cors = CORS(app, resource={r"/*": {"origins": "*"}})


@app.route("/orders")
def airtable_orders():
    """
    dash board orders data
    """
    orders = AirOrders()
    total_orders = orders.orders_count()
    total_inprogress_orders = orders.inprogress_orders()
    revenue = orders.orders_revenue()
    recent_orders = orders.recent_orders()
    total_orders_this_month = orders.current_month_orders()
    final_data = {
        "total_orders": total_orders,
        "total_inprogress_orders": total_inprogress_orders,
        "revenue": revenue,
        "recent_orders": recent_orders,
        "total_orders_this_month": total_orders_this_month,
    }
    return jsonify(final_data)




if __name__ == "__main__":
    app.run()
