import {
	SiAngular,
	SiAssemblyscript,
	SiCplusplus,
	SiCsharp,
	SiCss3,
	SiDart,
	SiGo,
	SiHtml5,
	SiJavascript,
	SiKotlin,
	SiMongodb,
	SiMysql,
	SiPerl,
	SiPhp,
	SiPowershell,
	SiPython,
	SiReact,
	SiRuby,
	SiRust,
	SiScala,
	SiSwift,
	SiTypescript,
	SiVuedotjs,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { BiMath } from 'react-icons/bi'
import { BsDisplay } from 'react-icons/bs'

interface QuizMapProps {
	id: string
	title: string
	icon: JSX.Element
	path: string
}
export const quizMap: QuizMapProps[] = [
	{ id: '1', title: 'Javascript', icon: <SiJavascript />, path: '/quizzes/javascript' },
	{ id: '2', title: 'TypeScript', icon: <SiTypescript />, path: '/quizzes/typescript' },
	{ id: '3', title: 'Python', icon: <SiPython />, path: '/quizzes/python' },
	{ id: '4', title: 'HTML', icon: <SiHtml5 />, path: '/quizzes/html' },
	{ id: '5', title: 'CSS', icon: <SiCss3 />, path: '/quizzes/css' },
	{ id: '6', title: 'React', icon: <SiReact />, path: '/quizzes/react' },
	{ id: '7', title: 'Vue', icon: <SiVuedotjs />, path: '/quizzes/vue' },
	{ id: '8', title: 'Angular', icon: <SiAngular />, path: '/quizzes/angular' },
	{ id: '9', title: 'Java', icon: <FaJava />, path: '/quizzes/java' },
	{ id: '10', title: 'Kotlin', icon: <SiKotlin />, path: '/quizzes/kotlin' },
	{ id: '11', title: 'Swift', icon: <SiSwift />, path: '/quizzes/swift' },
	{ id: '12', title: 'MySQL', icon: <SiMysql />, path: '/quizzes/mysql' },
	{ id: '13', title: 'MongoDB', icon: <SiMongodb />, path: '/quizzes/mongodb' },
	{ id: '14', title: 'C#', icon: <SiCsharp />, path: '/quizzes/csharp' },
	{ id: '15', title: 'Rust', icon: <SiRust />, path: '/quizzes/rust' },
	{ id: '16', title: 'Go', icon: <SiGo />, path: '/quizzes/go' },
	{ id: '17', title: 'C', icon: <SiCplusplus />, path: '/quizzes/c' },
	{ id: '18', title: 'C++', icon: <SiCplusplus />, path: '/quizzes/cpp' },
	{ id: '19', title: 'PHP', icon: <SiPhp />, path: '/quizzes/php' },
	{ id: '20', title: 'Ruby', icon: <SiRuby />, path: '/quizzes/ruby' },
	{ id: '21', title: 'Perl', icon: <SiPerl />, path: '/quizzes/perl' },
	{ id: '22', title: 'Scala', icon: <SiScala />, path: '/quizzes/scala' },
	{ id: '23', title: 'Dart', icon: <SiDart />, path: '/quizzes/dart' },
	{ id: '24', title: 'PowerShell', icon: <SiPowershell />, path: '/quizzes/powershell' },
]

export const quizMapTechScience: QuizMapProps[] = [
	{ id: '25', title: 'Mathematics', icon: <BiMath />, path: '/quizzes/math' },
	{ id: '26', title: 'Computer Science', icon: <BsDisplay />, path: '/quizzes/computer-science' },
]
