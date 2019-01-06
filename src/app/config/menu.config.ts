

export class MenuConfig {
    static getMenuConfig() {
        return [
            {
                name: 'Blog', subMenus: [
                    { name: 'Apna Bites', id: 56, subMenus: [] },
                    { name: 'Articles', id: 4, subMenus: [] }
                ]
            },
            {
                name: 'Law Notes',
                subMenus: [
                    { name: 'Administrative Law', id: 1, subMenus: [] /* Wrong Id */ },
                    { name: 'Civil Procedure', id: 24, subMenus: [] },
                    { name: 'Company Law', id: 25, subMenus: [] },
                    { name: 'Competition Law', id: 3326, subMenus: [] },
                    { name: 'Constitutional Law', id: 26, subMenus: [] },
                    { name: 'Contract Law', id: 27, subMenus: [] },
                    {
                        name: 'More', subMenus: [
                            { name: 'Criminal Procedure', id: 28, subMenus: [] },
                            { name: 'Cyber Law', id: 29, subMenus: [] },
                            { name: 'Environmental Law', id: 30, subMenus: [] },
                            { name: 'Hindu Law', id: 64, subMenus: [] },
                            { name: 'Human Rights', id: 4002, subMenus: [] },
                            { name: 'Indian Legal System', id: 58, subMenus: [] },
                            { name: 'Indian Penal Code', id: 39, subMenus: [] },
                            { name: 'International Law', id: 41, subMenus: [] },
                            { name: 'International Trade Law', id: 3363, subMenus: [] },
                            { name: 'Interpretation Of Statutes', id: 69, subMenus: [] },
                            { name: 'Jurisprudence', id: 32, subMenus: [] },
                            { name: 'Labour Law', id: 33, subMenus: [] },
                            { name: 'Law Of Evidence', id: 34, subMenus: [] },
                            { name: 'Law Of Torts', id: 38, subMenus: [] },
                            { name: 'Muslim Law', id: 65, subMenus: [] },
                            { name: 'Property Law', id: 35, subMenus: [] },
                            { name: 'Quotes And Maxim', id: 36, subMenus: [] },
                        ]
                    }
                ]
            },
            {
                name: 'Opportunities', subMenus: [
                    { name: 'Conference', id: 53, subMenus: [] },
                    { name: 'Essay / Paper Submission', id: 50, subMenus: [] },
                    { name: 'Job Opportunities', id: 52, subMenus: [] },
                    { name: 'Moot Court Competitions', id: 49, subMenus: [] },
                    { name: 'Others', id: 61, subMenus: [] },
                ]
            },
            { name: 'Interviews', id: 44, subMenus: [] },
            { name: 'Admissions', id: 62, subMenus: [] },
            { name: 'News', id: 1, subMenus: [] /* Wrong */ },
            { name: 'Internships', id: 9, subMenus: [] },
            {
                name: 'More', subMenus: [
                    { name: 'About Us - Legal Bites', id: 1, subMenus: [] /* Wrong */ },
                    { name: 'Campus Amicus', id: 1, subMenus: [] /* Wrong */ },
                    { name: 'Career Advice', id: 1, subMenus: [] /* Wrong */ },
                    { name: 'Conveyancing Deeds', id: 45, subMenus: [] },
                    { name: 'Court Pleadings', id: 11, subMenus: [] },
                    { name: 'Landmark Judgements', id: 47, subMenus: [] },
                    { name: 'Law Commission Reports', id: 46, subMenus: [] },
                    { name: 'Law School Review', id: 63, subMenus: [] },
                    { name: 'Moot Court Memorials', id: 14, subMenus: [] }
                ]
            },
        ]
    }
}