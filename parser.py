import xlrd



def parse(file):
	"""parses a .xlsx file to a json-like object"""

	#OPEN the xlsx file:
	#A Book instance is returned which contains the contents of an excel "workbook")
	workbook = xlrd.open_workbook(file)

	#READ the xlxs file:
	#Loads the desired worksheet if it is not alreay loaded or if there are multiple woorsheets. 
	worksheet = workbook.sheet_by_name('Dashboard')

	#nrows is a method of the Sheets class. It returns the number of rows in a sheet.
	num_of_rows = worksheet.nrows

	#empty list to add rows to
	worksheet_items = []

	for sheet in workbook.sheets():
		print "worksheet: ", sheet.name
		for row in range(sheet.nrows):
			items = []
			for col in range(sheet.ncols):
				items.append(sheet.cell(row, col).value)
			worksheet_items.append(items)
			#print ",".join(items)
	print worksheet_items
	#create a list of dictionaries


	#print(ind_list)

	#return parsed_data


def main ():
	f = "May_2014_Dashboard_Indicators.xlsx"

	parse(f)

if __name__ == "__main__":
    main()