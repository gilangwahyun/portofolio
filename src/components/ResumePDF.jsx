import React from 'react';
import { Document, Page, Text, View, StyleSheet, pdf, Image } from '@react-pdf/renderer';
import profileImage from '../assets/image_profile.JPG';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

// Styles untuk dokumen PDF
const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: '#ffffff',
    fontFamily: 'Helvetica',
    position: 'relative',
  },
  backgroundAccent: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 150,
    height: 150,
    backgroundColor: '#f0f2ff',
    borderBottomLeftRadius: 100,
    opacity: 0.7,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 20,
    paddingBottom: 15,
    borderBottom: '2 solid #5d6af8',
    position: 'relative',
  },
  headerContent: {
    flex: 1,
    paddingLeft: 15,
  },
  photo: {
    width: 85,
    height: 85,
    borderRadius: 42.5,
    border: '2 solid #5d6af8',
  },
  photoPlaceholder: {
    width: 85,
    height: 85,
    backgroundColor: '#8a94ff',
    borderRadius: 42.5,
    border: '2 solid #5d6af8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  initial: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  title: {
    fontSize: 14,
    color: '#5d6af8',
    marginBottom: 10,
    fontWeight: 'medium',
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  contactItem: {
    fontSize: 8,
    marginBottom: 2,
    marginRight: 10,
    color: '#555',
  },
  section: {
    marginBottom: 15,
    position: 'relative',
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#5d6af8',
    borderBottom: '1 solid #eee',
    paddingBottom: 3,
  },
  paragraph: {
    fontSize: 9.5,
    marginBottom: 6,
    lineHeight: 1.4,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  rowLeft: {
    flex: 3,
  },
  rowRight: {
    flex: 1,
    textAlign: 'right',
  },
  entryTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#333',
  },
  entrySubtitle: {
    fontSize: 9.5,
    color: '#444',
    marginBottom: 3,
  },
  date: {
    fontSize: 9,
    color: '#5d6af8',
    textAlign: 'right',
    fontWeight: 'medium',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillColumn: {
    width: '50%',
    paddingRight: 10,
  },
  skillItem: {
    marginBottom: 6,
  },
  skillName: {
    fontSize: 9.5,
    color: '#333',
  },
  skillBarContainer: {
    height: 5,
    backgroundColor: '#eee',
    marginTop: 3,
    borderRadius: 2.5,
  },
  skillBar: {
    height: 5,
    backgroundColor: '#5d6af8',
    borderRadius: 2.5,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4,
  },
  tag: {
    backgroundColor: '#f0f2ff',
    borderRadius: 4,
    padding: 3,
    fontSize: 7.5,
    marginRight: 4,
    marginBottom: 4,
    color: '#5d6af8',
  },
  columns: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  columnLeft: {
    width: '49%',
    marginRight: '2%',
    padding: 0,
  },
  columnRight: {
    width: '49%',
    padding: 0,
  },
  language: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  languageName: {
    fontSize: 9.5,
    color: '#333',
  },
  languageLevel: {
    fontSize: 9.5,
    color: '#5d6af8',
  },
  interestItem: {
    fontSize: 9.5,
    marginRight: 12,
    color: '#444',
    backgroundColor: '#f8f9fa',
    padding: '4 8',
    borderRadius: 4,
    marginBottom: 5,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    textAlign: 'center',
    fontSize: 8,
    color: '#999',
    borderTop: '0.5 solid #eee',
    paddingTop: 5,
  },
});

// Komponen utama untuk react-pdf
const ResumePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Background elements */}
      <View style={styles.backgroundAccent} />
      
      {/* Header */}
      <View style={styles.header}>
        {/* Inisial dalam lingkaran sebagai pengganti foto */}
        <View style={styles.photoPlaceholder}>
          <Text style={styles.initial}>G</Text>
        </View>
        
        <View style={styles.headerContent}>
          <Text style={styles.name}>Gilang Wahyu Nugraha</Text>
          <Text style={styles.title}>Full Stack Developer</Text>
          <View style={styles.contactRow}>
            <Text style={styles.contactItem}>● gilangwahyu471@gmail.com</Text>
            <Text style={styles.contactItem}>● +62 8223 2438 578</Text>
            <Text style={styles.contactItem}>● Yogyakarta, Indonesia</Text>
            <Text style={styles.contactItem}>● github.com/gilangwahyun</Text>
          </View>
        </View>
      </View>

      {/* Content in Two Columns */}
      <View style={styles.columns}>
        {/* Left Column */}
        <View style={styles.columnLeft}>
          {/* Professional Summary */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Summary</Text>
            <Text style={styles.paragraph}>
              Computer Science student at Atma Jaya Yogyakarta University, passionate about
              web and mobile development. Currently focusing on building responsive and 
              user-friendly applications using modern frameworks and technologies.
            </Text>
          </View>

          {/* Education */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            <View style={styles.row}>
              <View style={styles.rowLeft}>
                <Text style={styles.entryTitle}>Bachelor of Computer Science</Text>
                <Text style={styles.entrySubtitle}>Atma Jaya Yogyakarta University</Text>
              </View>
              <View style={styles.rowRight}>
                <Text style={styles.date}>2022 - Present</Text>
              </View>
            </View>
            <Text style={styles.paragraph}>
              Currently in 6th semester. Coursework: Data Structures, Algorithms, 
              OOP, Database Systems, Web Programming, Mobile App Development.
            </Text>
          </View>

          {/* Projects */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projects</Text>
            
            {/* Project 1 */}
            <View style={styles.row}>
              <View style={styles.rowLeft}>
                <Text style={styles.entryTitle}>Personal Portfolio Website</Text>
              </View>
              <View style={styles.rowRight}>
                <Text style={styles.date}>2025</Text>
              </View>
            </View>
            <Text style={styles.paragraph}>
              Responsive portfolio website using React and Laravel with modern UI/UX principles, 
              featuring project showcase, contact form, and admin dashboard.
            </Text>
            <View style={styles.tagsContainer}>
              <Text style={styles.tag}>React</Text>
              <Text style={styles.tag}>Laravel</Text>
              <Text style={styles.tag}>Bootstrap</Text>
              <Text style={styles.tag}>MySQL</Text>
            </View>

            {/* Project 2 */}
            <View style={[styles.row, { marginTop: 8 }]}>
              <View style={styles.rowLeft}>
                <Text style={styles.entryTitle}>E-Commerce Mobile App</Text>
              </View>
              <View style={styles.rowRight}>
                <Text style={styles.date}>2025</Text>
              </View>
            </View>
            <Text style={styles.paragraph}>
              Cross-platform mobile application for an e-commerce store using Flutter with product 
              catalog, cart functionality, and user authentication.
            </Text>
            <View style={styles.tagsContainer}>
              <Text style={styles.tag}>Flutter</Text>
              <Text style={styles.tag}>Dart</Text>
              <Text style={styles.tag}>Firebase</Text>
            </View>
          </View>
        </View>

        {/* Right Column */}
        <View style={styles.columnRight}>
          {/* Skills */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Technical Skills</Text>
            
            {/* Frontend */}
            <Text style={styles.entrySubtitle}>Frontend Development</Text>
            <View style={styles.skillItem}>
              <Text style={styles.skillName}>React.js</Text>
              <View style={styles.skillBarContainer}>
                <View style={[styles.skillBar, { width: '75%' }]} />
              </View>
            </View>
            <View style={styles.skillItem}>
              <Text style={styles.skillName}>JavaScript</Text>
              <View style={styles.skillBarContainer}>
                <View style={[styles.skillBar, { width: '80%' }]} />
              </View>
            </View>
            <View style={styles.skillItem}>
              <Text style={styles.skillName}>HTML/CSS</Text>
              <View style={styles.skillBarContainer}>
                <View style={[styles.skillBar, { width: '85%' }]} />
              </View>
            </View>
            <View style={styles.skillItem}>
              <Text style={styles.skillName}>Bootstrap</Text>
              <View style={styles.skillBarContainer}>
                <View style={[styles.skillBar, { width: '80%' }]} />
              </View>
            </View>

            {/* Backend & Mobile */}
            <Text style={[styles.entrySubtitle, { marginTop: 10 }]}>Backend & Mobile</Text>
            <View style={styles.skillItem}>
              <Text style={styles.skillName}>Laravel</Text>
              <View style={styles.skillBarContainer}>
                <View style={[styles.skillBar, { width: '70%' }]} />
              </View>
            </View>
            <View style={styles.skillItem}>
              <Text style={styles.skillName}>PHP</Text>
              <View style={styles.skillBarContainer}>
                <View style={[styles.skillBar, { width: '75%' }]} />
              </View>
            </View>
            <View style={styles.skillItem}>
              <Text style={styles.skillName}>Flutter</Text>
              <View style={styles.skillBarContainer}>
                <View style={[styles.skillBar, { width: '65%' }]} />
              </View>
            </View>
            <View style={styles.skillItem}>
              <Text style={styles.skillName}>MySQL</Text>
              <View style={styles.skillBarContainer}>
                <View style={[styles.skillBar, { width: '70%' }]} />
              </View>
            </View>
          </View>

          {/* Languages */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Languages</Text>
            <View style={styles.language}>
              <Text style={styles.languageName}>Indonesian</Text>
              <Text style={styles.languageLevel}>Native</Text>
            </View>
            <View style={styles.language}>
              <Text style={styles.languageName}>English</Text>
              <Text style={styles.languageLevel}>B2 Upper Intermediate</Text>
            </View>
            <Text style={[styles.paragraph, {fontSize: 8, marginTop: 2, fontStyle: 'italic'}]}>
              British Council Certification (June 2024) - Score: 424/B2
            </Text>
          </View>

          {/* Interests */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Interests</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 5 }}>
              <Text style={styles.interestItem}>● Web Development</Text>
              <Text style={styles.interestItem}>● Mobile Apps</Text>
              <Text style={styles.interestItem}>● Tech Books</Text>
              <Text style={styles.interestItem}>● Gaming</Text>
            </View>
          </View>

          {/* LinkedIn & Social */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Social</Text>
            <Text style={styles.paragraph}>
              ● www.linkedin.com/in/gilang-wahyu-nugraha{'\n'}
              ● instagram.com/gilangwnugraha
            </Text>
          </View>
        </View>
      </View>
      
      {/* Footer */}
      <Text style={styles.footer}>
        This resume was generated from Gilang Wahyu Nugraha's portfolio website
      </Text>
    </Page>
  </Document>
);

// Fungsi untuk membuat PDF menggunakan DOM rendering (bukan react-pdf)
export const generatePDF = async () => {
  try {
    // Pertama, buat elemen resume dan sisipkan ke DOM
    const resumeContainer = document.createElement('div');
    resumeContainer.id = 'resume-print-container';
    resumeContainer.style.position = 'absolute';
    resumeContainer.style.top = '-9999px';
    resumeContainer.style.left = '-9999px';
    resumeContainer.style.width = '210mm'; // A4 width
    resumeContainer.style.minHeight = '297mm'; // A4 height
    resumeContainer.style.padding = '15mm';
    resumeContainer.style.backgroundColor = '#fff';
    resumeContainer.style.fontFamily = 'Arial, sans-serif';
    resumeContainer.style.boxSizing = 'border-box';
    
    // Tambahkan referensi Bootstrap Icons
    const linkIconCSS = document.createElement('link');
    linkIconCSS.rel = 'stylesheet';
    linkIconCSS.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.css';
    document.head.appendChild(linkIconCSS);
    
    // Header dengan foto
    const header = document.createElement('div');
    header.style.display = 'flex';
    header.style.marginBottom = '20px';
    header.style.paddingBottom = '15px';
    header.style.borderBottom = '2px solid #5d6af8';
    
    // Foto - Menggunakan solusi sederhana tanpa pre-processing
    const photoContainer = document.createElement('div');
    photoContainer.style.marginRight = '20px';
    photoContainer.style.width = '100px';
    photoContainer.style.height = '100px';
    photoContainer.style.borderRadius = '50%';
    photoContainer.style.border = '3px solid #5d6af8';
    photoContainer.style.overflow = 'hidden';
    photoContainer.style.position = 'relative';
    photoContainer.style.backgroundColor = '#5d6af8';
    photoContainer.style.display = 'flex';
    photoContainer.style.alignItems = 'center';
    photoContainer.style.justifyContent = 'center';
    
    // Tambahkan inisial sebagai fallback jika foto gagal dimuat
    const initial = document.createElement('div');
    initial.textContent = 'G';
    initial.style.color = 'white';
    initial.style.fontSize = '32px';
    initial.style.fontWeight = 'bold';
    photoContainer.appendChild(initial);
    
    // Coba tambahkan foto jika dimungkinkan
    try {
      const photo = document.createElement('img');
      photo.style.position = 'absolute';
      photo.style.top = '0';
      photo.style.left = '0';
      photo.style.width = '100%';
      photo.style.height = '100%';
      photo.style.objectFit = 'cover';
      photo.src = profileImage;
      photoContainer.appendChild(photo);
    } catch (error) {
      console.log("Fallback to initial for photo:", error);
      // Gunakan inisial yang sudah ditambahkan
    }
    
    // Informasi utama
    const headerContent = document.createElement('div');
    headerContent.style.flex = '1';
    headerContent.innerHTML = `
      <h1 style="margin: 0; font-size: 26px; color: #333;">Gilang Wahyu Nugraha</h1>
      <h2 style="margin: 5px 0 15px; font-size: 18px; color: #5d6af8; font-weight: 500;">Full Stack Developer</h2>
      <div style="display: flex; flex-wrap: wrap; font-size: 13px; color: #555;">
        <div style="margin-right: 15px; margin-bottom: 5px;"><i class="bi bi-envelope" style="color: #5d6af8; margin-right: 5px;"></i> gilangwahyu471@gmail.com</div>
        <div style="margin-right: 15px; margin-bottom: 5px;"><i class="bi bi-telephone" style="color: #5d6af8; margin-right: 5px;"></i> +62 8223 2438 578</div>
        <div style="margin-right: 15px; margin-bottom: 5px;"><i class="bi bi-geo-alt" style="color: #5d6af8; margin-right: 5px;"></i> Yogyakarta, Indonesia</div>
        <div style="margin-right: 15px; margin-bottom: 5px;"><i class="bi bi-github" style="color: #5d6af8; margin-right: 5px;"></i> github.com/gilangwahyun</div>
      </div>
    `;
    
    // Tambahkan elemen ke DOM
    header.appendChild(photoContainer);
    header.appendChild(headerContent);
    resumeContainer.appendChild(header);
    
    // Content dalam dua kolom
    const contentWrapper = document.createElement('div');
    contentWrapper.style.display = 'flex';
    contentWrapper.style.gap = '20px';
    
    // Kolom kiri (60%)
    const leftColumn = document.createElement('div');
    leftColumn.style.width = '60%';
    leftColumn.innerHTML = `
      <div style="margin-bottom: 22px;">
        <h3 style="color: #5d6af8; font-size: 16px; margin: 0 0 10px; padding-bottom: 5px; border-bottom: 1px solid #eee;">Professional Summary</h3>
        <p style="margin: 0; font-size: 13px; line-height: 1.5; color: #333;">
          Computer Science student at Atma Jaya Yogyakarta University, passionate about
          web and mobile development. Currently focusing on building responsive and 
          user-friendly applications using modern frameworks and technologies.
        </p>
      </div>
      
      <div style="margin-bottom: 22px;">
        <h3 style="color: #5d6af8; font-size: 16px; margin: 0 0 10px; padding-bottom: 5px; border-bottom: 1px solid #eee;">Education</h3>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div>
            <div style="font-weight: bold; font-size: 14px;">Bachelor of Computer Science</div>
            <div style="font-size: 13px; color: #444; margin-bottom: 5px;">Atma Jaya Yogyakarta University</div>
          </div>
          <div style="font-size: 13px; color: #5d6af8; font-weight: 500;">2022 - Present</div>
        </div>
        <p style="margin: 0; font-size: 13px; line-height: 1.5; color: #333;">
          Currently in 6th semester. Coursework: Data Structures, Algorithms, 
          OOP, Database Systems, Web Programming, Mobile App Development.
        </p>
      </div>
      
      <div style="margin-bottom: 22px;">
        <h3 style="color: #5d6af8; font-size: 16px; margin: 0 0 10px; padding-bottom: 5px; border-bottom: 1px solid #eee;">Projects</h3>
        
        <div style="margin-bottom: 14px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
            <div style="font-weight: bold; font-size: 14px;">Personal Portfolio Website</div>
            <div style="font-size: 13px; color: #5d6af8; font-weight: 500;">2025</div>
          </div>
          <p style="margin: 0 0 8px; font-size: 13px; line-height: 1.5; color: #333;">
            Responsive portfolio website using React and Laravel with modern UI/UX principles, 
            featuring project showcase, contact form, and admin dashboard.
          </p>
          <div style="display: flex; flex-wrap: wrap; gap: 5px;">
            <span style="background-color: rgba(93, 106, 248, 0.1); color: #5d6af8; padding: 3px 8px; border-radius: 4px; font-size: 11px;">React</span>
            <span style="background-color: rgba(93, 106, 248, 0.1); color: #5d6af8; padding: 3px 8px; border-radius: 4px; font-size: 11px;">Laravel</span>
            <span style="background-color: rgba(93, 106, 248, 0.1); color: #5d6af8; padding: 3px 8px; border-radius: 4px; font-size: 11px;">Bootstrap</span>
            <span style="background-color: rgba(93, 106, 248, 0.1); color: #5d6af8; padding: 3px 8px; border-radius: 4px; font-size: 11px;">MySQL</span>
          </div>
        </div>
        
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
            <div style="font-weight: bold; font-size: 14px;">E-Commerce Mobile App</div>
            <div style="font-size: 13px; color: #5d6af8; font-weight: 500;">2025</div>
          </div>
          <p style="margin: 0 0 8px; font-size: 13px; line-height: 1.5; color: #333;">
            Cross-platform mobile application for an e-commerce store using Flutter with product 
            catalog, cart functionality, and user authentication.
          </p>
          <div style="display: flex; flex-wrap: wrap; gap: 5px;">
            <span style="background-color: rgba(93, 106, 248, 0.1); color: #5d6af8; padding: 3px 8px; border-radius: 4px; font-size: 11px;">Flutter</span>
            <span style="background-color: rgba(93, 106, 248, 0.1); color: #5d6af8; padding: 3px 8px; border-radius: 4px; font-size: 11px;">Dart</span>
            <span style="background-color: rgba(93, 106, 248, 0.1); color: #5d6af8; padding: 3px 8px; border-radius: 4px; font-size: 11px;">Firebase</span>
          </div>
        </div>
      </div>
    `;
    
    // Kolom kanan (40%)
    const rightColumn = document.createElement('div');
    rightColumn.style.width = '40%';
    rightColumn.innerHTML = `
      <div style="margin-bottom: 22px;">
        <h3 style="color: #5d6af8; font-size: 16px; margin: 0 0 10px; padding-bottom: 5px; border-bottom: 1px solid #eee;">Technical Skills</h3>
        
        <div style="margin-bottom: 12px;">
          <div style="font-size: 14px; font-weight: 500; margin-bottom: 5px;">Frontend Development</div>
          
          <div style="margin-bottom: 8px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 3px;">
              <span style="font-size: 13px;">React.js</span>
            </div>
            <div style="height: 6px; background-color: #eee; border-radius: 3px;">
              <div style="height: 100%; width: 75%; background-color: #5d6af8; border-radius: 3px;"></div>
            </div>
          </div>
          
          <div style="margin-bottom: 8px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 3px;">
              <span style="font-size: 13px;">JavaScript</span>
            </div>
            <div style="height: 6px; background-color: #eee; border-radius: 3px;">
              <div style="height: 100%; width: 80%; background-color: #5d6af8; border-radius: 3px;"></div>
            </div>
          </div>
          
          <div style="margin-bottom: 8px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 3px;">
              <span style="font-size: 13px;">HTML/CSS</span>
            </div>
            <div style="height: 6px; background-color: #eee; border-radius: 3px;">
              <div style="height: 100%; width: 85%; background-color: #5d6af8; border-radius: 3px;"></div>
            </div>
          </div>
          
          <div style="margin-bottom: 8px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 3px;">
              <span style="font-size: 13px;">Bootstrap</span>
            </div>
            <div style="height: 6px; background-color: #eee; border-radius: 3px;">
              <div style="height: 100%; width: 80%; background-color: #5d6af8; border-radius: 3px;"></div>
            </div>
          </div>
        </div>
        
        <div style="margin-bottom: 12px;">
          <div style="font-size: 14px; font-weight: 500; margin-bottom: 5px;">Backend & Mobile</div>
          
          <div style="margin-bottom: 8px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 3px;">
              <span style="font-size: 13px;">Laravel</span>
            </div>
            <div style="height: 6px; background-color: #eee; border-radius: 3px;">
              <div style="height: 100%; width: 70%; background-color: #5d6af8; border-radius: 3px;"></div>
            </div>
          </div>
          
          <div style="margin-bottom: 8px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 3px;">
              <span style="font-size: 13px;">PHP</span>
            </div>
            <div style="height: 6px; background-color: #eee; border-radius: 3px;">
              <div style="height: 100%; width: 75%; background-color: #5d6af8; border-radius: 3px;"></div>
            </div>
          </div>
          
          <div style="margin-bottom: 8px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 3px;">
              <span style="font-size: 13px;">Flutter</span>
            </div>
            <div style="height: 6px; background-color: #eee; border-radius: 3px;">
              <div style="height: 100%; width: 65%; background-color: #5d6af8; border-radius: 3px;"></div>
            </div>
          </div>
          
          <div style="margin-bottom: 8px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 3px;">
              <span style="font-size: 13px;">MySQL</span>
            </div>
            <div style="height: 6px; background-color: #eee; border-radius: 3px;">
              <div style="height: 100%; width: 70%; background-color: #5d6af8; border-radius: 3px;"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div style="margin-bottom: 22px;">
        <h3 style="color: #5d6af8; font-size: 16px; margin: 0 0 10px; padding-bottom: 5px; border-bottom: 1px solid #eee;">Languages</h3>
        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
          <span style="font-size: 13px;">Indonesian</span>
          <span style="font-size: 13px; color: #5d6af8; font-weight: 500;">Native</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
          <span style="font-size: 13px;">English</span>
          <span style="font-size: 13px; color: #5d6af8; font-weight: 500;">B2 Upper Intermediate</span>
        </div>
        <div style="font-size: 11px; font-style: italic; color: #666; margin-top: 5px;">
          British Council Certification (June 2024) - Score: 424/B2
        </div>
      </div>
      
      <div style="margin-bottom: 22px;">
        <h3 style="color: #5d6af8; font-size: 16px; margin: 0 0 10px; padding-bottom: 5px; border-bottom: 1px solid #eee;">Interests</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          <span style="background-color: #f8f9fa; color: #444; padding: 5px 12px; border-radius: 4px; font-size: 13px;"><i class="bi bi-code-slash" style="margin-right: 5px;"></i>Web Development</span>
          <span style="background-color: #f8f9fa; color: #444; padding: 5px 12px; border-radius: 4px; font-size: 13px;"><i class="bi bi-phone" style="margin-right: 5px;"></i>Mobile Apps</span>
          <span style="background-color: #f8f9fa; color: #444; padding: 5px 12px; border-radius: 4px; font-size: 13px;"><i class="bi bi-book" style="margin-right: 5px;"></i>Tech Books</span>
          <span style="background-color: #f8f9fa; color: #444; padding: 5px 12px; border-radius: 4px; font-size: 13px;"><i class="bi bi-controller" style="margin-right: 5px;"></i>Gaming</span>
        </div>
      </div>
      
      <div style="margin-bottom: 22px;">
        <h3 style="color: #5d6af8; font-size: 16px; margin: 0 0 10px; padding-bottom: 5px; border-bottom: 1px solid #eee;">Social</h3>
        <div style="font-size: 13px; line-height: 1.5; color: #444;">
          <div style="margin-bottom: 4px;"><i class="bi bi-linkedin" style="color: #5d6af8; margin-right: 5px;"></i>www.linkedin.com/in/gilang-wahyu-nugraha</div>
          <div><i class="bi bi-instagram" style="color: #5d6af8; margin-right: 5px;"></i>instagram.com/gilangwnugraha</div>
        </div>
      </div>
    `;
    
    // Tambahkan kolom ke wrapper
    contentWrapper.appendChild(leftColumn);
    contentWrapper.appendChild(rightColumn);
    resumeContainer.appendChild(contentWrapper);
    
    // Footer
    const footer = document.createElement('div');
    footer.style.fontSize = '11px';
    footer.style.color = '#999';
    footer.style.textAlign = 'center';
    footer.style.borderTop = '1px solid #eee';
    footer.style.paddingTop = '10px';
    footer.style.marginTop = '25px';
    footer.textContent = 'This resume was generated from Gilang Wahyu Nugraha\'s portfolio website';
    resumeContainer.appendChild(footer);
    
    // Tambahkan elemen visual ke background
    const bgAccent = document.createElement('div');
    bgAccent.style.position = 'absolute';
    bgAccent.style.top = '0';
    bgAccent.style.right = '0';
    bgAccent.style.width = '150px';
    bgAccent.style.height = '150px';
    bgAccent.style.backgroundColor = '#f0f2ff';
    bgAccent.style.borderBottomLeftRadius = '100px';
    bgAccent.style.opacity = '0.7';
    bgAccent.style.zIndex = '0';
    resumeContainer.insertBefore(bgAccent, resumeContainer.firstChild);
    
    // Tambahkan container ke DOM
    document.body.appendChild(resumeContainer);
    
    // Ubah ke PDF menggunakan html2canvas dan jsPDF
    try {
      // Gunakan scale yang lebih tinggi untuk kualitas yang lebih baik
      const canvas = await html2canvas(resumeContainer, { 
        scale: 2,
        useCORS: true,
        allowTaint: true,
        letterRendering: true,
      });
      
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      
      // Buat PDF dengan ukuran A4
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      
      // Hitung aspek rasio untuk memastikan sesuai dengan halaman A4
      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      // Cek apakah gambar lebih panjang dari halaman A4
      if (imgHeight > pageHeight) {
        // Jika lebih panjang, sesuaikan dengan tinggi halaman
        const imgWidthAdjusted = (pageHeight * canvas.width) / canvas.height;
        pdf.addImage(imgData, 'JPEG', (pageWidth - imgWidthAdjusted) / 2, 0, imgWidthAdjusted, pageHeight);
      } else {
        // Jika tidak, gunakan seluruh lebar dan center vertikal
        pdf.addImage(imgData, 'JPEG', 0, (pageHeight - imgHeight) / 2, imgWidth, imgHeight);
      }
      
      // Buat format nama file yang lebih rapi
      const currentDate = new Date();
      const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;
      pdf.save(`CV_Gilang_Wahyu_Nugraha_${formattedDate}.pdf`);
      
    } finally {
      // Hapus elemen dari DOM
      document.body.removeChild(resumeContainer);
    }
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Terjadi kesalahan saat membuat PDF. Silakan coba lagi.');
  }
};

export default ResumePDF; 