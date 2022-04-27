package com.hms.reports.generator;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;

import com.hms.reports.models.Bill;
import com.hms.reports.service.BillService;
import com.lowagie.text.Document;
import com.lowagie.text.DocumentException;
import com.lowagie.text.Font;
import com.lowagie.text.FontFactory;
import com.lowagie.text.PageSize;
import com.lowagie.text.Paragraph;
import com.lowagie.text.pdf.CMYKColor;
import com.lowagie.text.pdf.PdfPCell;
import com.lowagie.text.pdf.PdfPTable;
import com.lowagie.text.pdf.PdfWriter;

public class BillPDFGenerator {

	@Autowired
	private BillService billService;

	@Autowired
	private Bill bill;

	public void generate(HttpServletResponse response, String id) throws DocumentException, IOException {

		// Creating the Object of Document
		Document document = new Document(PageSize.A4);

		// Getting instance of PdfWriter
		PdfWriter.getInstance(document, response.getOutputStream());

		// Opening the created document to modify it
		document.open();

		// Creating font
		// Setting font style and size
		Font fontTiltle = FontFactory.getFont(FontFactory.TIMES_ROMAN);
		fontTiltle.setSize(20);

		// Creating paragraph
		Paragraph paragraph = new Paragraph("ABC Hotel Bill", fontTiltle);

		// Aligning the paragraph in document
		paragraph.setAlignment(Paragraph.ALIGN_CENTER);

		// Adding the created paragraph in document
		document.add(paragraph);

		// Creating a table of 2 columns
		PdfPTable table = new PdfPTable(2);

		// Setting width of table, its columns and spacing
		table.setWidthPercentage(100f);
		table.setWidths(new int[] { 2, 2 });
		table.setSpacingBefore(5);

		// Create Table Cells for table header
		PdfPCell cell = new PdfPCell();

		// Setting the background color and padding
//		cell.setBackgroundColor(CMYKColor.GRAY);
//		cell.setPadding(5);

		// Creating font
		// Setting font style and size
		Font font = FontFactory.getFont(FontFactory.TIMES_ROMAN);
		font.setColor(CMYKColor.WHITE);

		// Adding headings in the created table cell/ header
		// Adding Cell to table
//		cell.setPhrase(new Phrase("BID", font));
//		table.addCell(cell);
//		cell.setPhrase(new Phrase("Student Name", font));
//		table.addCell(cell);

		// Iterating over the list of students

		// Adding student id
		table.addCell("Date");
		table.addCell(String.valueOf(billService.printBillById(id).getDate()));

		table.addCell("Bill Number");
		table.addCell(String.valueOf(billService.printBillById(id).getBillNumber()));

		table.addCell("Guest Code");
		table.addCell(String.valueOf(billService.printBillById(id).getGuestCode()));

		table.addCell("Quantity");
		table.addCell(String.valueOf(billService.printBillById(id).getQuantity()));

		table.addCell("Unit");
		table.addCell(String.valueOf(billService.printBillById(id).getUnit()));

		table.addCell("Service");
		table.addCell(String.valueOf(billService.printBillById(id).getServices()));

		table.addCell("Taxes");
		table.addCell(String.valueOf(billService.printBillById(id).getTaxes()));

		table.addCell("Total Price");
		table.addCell(String.valueOf(billService.printBillById(id).getTotalPrice_()));
		// Adding the created table to document
		document.add(table);

		// Closing the document
		document.close();

	}
}