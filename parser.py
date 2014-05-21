import xlrd
import json
import re

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

	#empty dict to hold indicators w/in a sector
	indicator_dict = {}

	#add each row value to a dict, append dict to list
	for sheet in workbook.sheets():
		for row in range(sheet.nrows):#row is type int, only an index
			indicator_list = []
			for col in range(sheet.ncols):#col is also type int, only an index
				cell = sheet.cell(row, col).value
				indicator_list.append(cell)

			if indicator_list[1] not in indicator_dict:
				indicator_dict[indicator_list[1]] = []

			clean_ind_txt = re.sub(r"INDICATOR \#\d\:\s", "", indicator_list[0])
			#sclean_ind_txt = re.sub(r"Ri", "RI", clean_ind_txt)
			indicator = {
				"indicator" : re.sub(r"Ri","RI", clean_ind_txt.title()),
				"sub-section" : indicator_list[2].title(),
				"url": indicator_list[3]
			}
			
			indicator_dict[indicator_list[1]].append(indicator)

	return json.dumps(indicator_dict)

if __name__ == "__main__":
	main()
