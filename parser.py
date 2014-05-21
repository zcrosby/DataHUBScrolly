import xlrd
import json

def main():
	raw_file = "xl_files/May_2104_Dashboard_Indicators.xlsx"
	parsed_xl_file = parse(raw_file)
	with open("indicators.json", "w") as f:
		f.write(parsed_xl_file)

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
	items = []

	#add each row value to a dict, append dict to list
	for sheet in workbook.sheets():
		for row in range(sheet.nrows):#row is type int
			indicator_list = []
			for col in range(sheet.ncols):#col is also type int
				cell = sheet.cell(row, col).value
				indicator_list.append(cell)
				#indicator["sector"] = col[1]
			indicator_dict = {}
			indicator_dict["indicator"] = indicator_list[0]
			indicator_dict["sector"] = indicator_list[1]
			indicator_dict["sub-section"] = indicator_list[2]
			indicator_dict["url"] = indicator_list[3]
			items.append(indicator_dict)

	return json.dumps(items)

if __name__ == "__main__":
	main()
