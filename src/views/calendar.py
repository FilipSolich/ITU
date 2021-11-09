
from tkinter import *
import tkinter as tk
from tkcalendar import Calendar
from datetime import date


class MyCalendar:

	def __init__(self,root):
		self.window_size_list = [1200,900]
		self.window_size_list.append(int(root.winfo_screenwidth()/2 - self.window_size_list[0] / 2))
		self.window_size_list.append(int(root.winfo_screenheight()/2 - self.window_size_list[1] / 2))
		root.geometry(f'{self.window_size_list[0]}x{self.window_size_list[1]}+{self.window_size_list[2]}+{self.window_size_list[3]}')

		self.cal = Calendar(root, selectmode = 'day',year = date.today().year, month = date.today().month, day = date.today().day, font="Arial 15",
						normalforeground='white',normalbackground="black",weekendbackground ="dark blue",bordercolor="white",
						weekendforeground='white',selectbackground="dark red",background="black",
						othermonthbackground ="light blue",othermonthwebackground ="light blue")
		self.cal.pack(pady = 20,expand = True,fill="both") 

