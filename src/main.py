#!/usr/bin/env python3

from tkinter import *
import tkinter as tk
from tkcalendar import Calendar
from datetime import date


from controllers import *
from views import *
from models import *
#functions
def grad_date(): 
	date.config(text = "Selected Date is: " + cal.get_date())

# ---------------------------------------------------------------

root = tk.Tk()
root.title('ITU Projekt')
window_size_list = [1200,900]

window_size_list.append(int(root.winfo_screenwidth()/2 - window_size_list[0] / 2))
window_size_list.append(int(root.winfo_screenheight()/2 - window_size_list[1] / 2))

root.geometry(f'{window_size_list[0]}x{window_size_list[1]}+{window_size_list[2]}+{window_size_list[3]}')

cal = Calendar(root, selectmode = 'day',year = date.today().year, month = date.today().month, day = date.today().day, font="Arial 15",
				normalforeground='white',normalbackground="black",weekendbackground ="dark blue",bordercolor="white",
				weekendforeground='white',selectbackground="dark red",background="black",
				othermonthbackground ="light blue",othermonthwebackground ="light blue")
cal.pack(pady = 20,expand = True,fill="both") 
Button(root, text = "Get Date",command = grad_date).pack(pady = 20) 
date = Label(root, text = "") 
date.pack(pady = 20) 

root.mainloop()


