#!/usr/bin/env python3

from tkinter import *
import tkinter as tk

from views.calendar import MyCalendar 

class ControlerCalendar:
	
	def __init__(self):
		self.root = tk.Tk()
		#self.model = Model()
		self.view = MyCalendar(self.root)

	def run(self):
		self.root.title('ITU Projekt')
		self.root.deiconify()
		self.root.mainloop()