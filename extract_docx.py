import zipfile
import xml.etree.ElementTree as ET

def extract_text_from_docx(file_path):
    with zipfile.ZipFile(file_path, 'r') as z:
        xml_content = z.read('word/document.xml')
    root = ET.fromstring(xml_content)
    ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
    paragraphs = root.findall('.//w:p', ns)
    text = []
    for p in paragraphs:
        runs = p.findall('.//w:t', ns)
        para_text = ''.join([run.text for run in runs if run.text])
        if para_text:
            text.append(para_text)
    return '\n'.join(text)

if __name__ == "__main__":
    file_path = 'LMS_TCO_Tool_Developer_Brief.docx'
    text = extract_text_from_docx(file_path)
    with open('LMS_TCO_Tool_Developer_Brief.md', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Extracted to LMS_TCO_Tool_Developer_Brief.md")
