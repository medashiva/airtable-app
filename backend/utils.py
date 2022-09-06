from airtable import Airtable
import json
from datetime import datetime, timedelta
import os
from dotenv import load_dotenv
load_dotenv()

class AirOrders:
    """
    This Class is with Airtable API
    """

    def __init__(self):
        
        self.app_id = os.environ.get('APP_ID')
        self.app_key = os.environ.get('APP_KEY')
        self.table_name = os.environ.get('TABLE_NAME')
        self.fields = [
            "order_id",
            "product_name",
            "price",
            "email",
            "order_status",
            "order_placed",
        ]
        self.orders = []

    def get_air_orders(self):
        print("hello")
        print("app_id",self.app_id)
        # fetching all orders from air table
        airtable = Airtable(self.app_id, self.table_name, self.app_key)
        print(airtable,"airtable")
        self.orders = airtable.get_all(
            fields=self.fields, sort=["-order_placed"], max_records=None
        )
        
        return self.orders


    def orders_count(self):
        # counting all orders
        if not self.orders:
            self.get_air_orders()
        return len(self.orders)

    def inprogress_orders(self):
        # count of in-progress orders
        if not self.orders:
            self.get_air_orders()
        k = "order_status"
        orders = self.orders
        inprogress_list = [
            ord for ord in self.orders if ord["fields"][k] == "in_progress"
        ]
        return len(inprogress_list)

    def orders_revenue(self):
        # total revenu
        if not self.orders:
            self.get_air_orders()
        revenue_total = sum([order["fields"]["price"] for order in self.orders])
        return round(revenue_total, 2)

    def current_month_orders(self):
        # current month orders
        if not self.orders:
            self.get_air_orders()
        past = datetime.now() - timedelta(days=30)
        k = "order_placed"
        current_month_orders = [
            ord
            for ord in self.orders
            if datetime.strptime(ord["fields"][k], "%Y-%m-%d") >= past
        ]
        return len(current_month_orders)

    def recent_orders(self):
        if not self.orders:
            self.get_air_orders()
        return self.orders[0:10]
