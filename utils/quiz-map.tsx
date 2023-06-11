import {
	SiCplusplus,
	SiCsharp,
	SiCss3,
	SiGo,
	SiHtml5,
	SiJavascript,
	SiKotlin,
	SiMongodb,
	SiMysql,
	SiPerl,
	SiPhp,
	SiPython,
	SiRuby,
	SiRust,
	SiScala,
	SiSwift,
	SiTypescript,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

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
	{ id: '6', title: 'Java', icon: <FaJava />, path: '/quizzes/java' },
	{ id: '7', title: 'Kotlin', icon: <SiKotlin />, path: '/quizzes/kotlin' },
	{ id: '8', title: 'Swift', icon: <SiSwift />, path: '/quizzes/swift' },
	{ id: '9', title: 'MySQL', icon: <SiMysql />, path: '/quizzes/mysql' },
	{ id: '10', title: 'MongoDB', icon: <SiMongodb />, path: '/quizzes/mongodb' },
	{ id: '11', title: 'C#', icon: <SiCsharp />, path: '/quizzes/csharp' },
	{ id: '12', title: 'Rust', icon: <SiRust />, path: '/quizzes/rust' },
	{ id: '13', title: 'Go', icon: <SiGo />, path: '/quizzes/go' },
	{ id: '14', title: 'C', icon: <SiCplusplus />, path: '/quizzes/c' },
	{ id: '15', title: 'C++', icon: <SiCplusplus />, path: '/quizzes/cpp' },
	{ id: '16', title: 'PHP', icon: <SiPhp />, path: '/quizzes/php' },
	{ id: '17', title: 'Ruby', icon: <SiRuby />, path: '/quizzes/ruby' },
	{ id: '18', title: 'Perl', icon: <SiPerl />, path: '/quizzes/perl' },
	{ id: '19', title: 'Scala', icon: <SiScala />, path: '/quizzes/scala' },
]
