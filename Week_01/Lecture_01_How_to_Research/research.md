# Flutter

## 1. Identify the "Why?" 
I want to research Flutter because I've heard that it is a good alternative option to React for creating front end applications. 

## 2. What are my assumptions and prior knowledge?
My assumption is that Flutter can be used as an alternative to React when creating client-side front end applications using JavaScript. 

## 3. Ask Questions
- Does Flutter use JavaScript or a superset of JavaScript (similar to how React uses JSX, which is a superset of JavaScript)?
- Does Flutter have its own framework, or is it just a library that is incorporated into an existing JavaScript application?
- Does Flutter use a component based architecture?
- Does Flutter rely on classes or functions?
- How can I create a basic webpage with Flutter?
- Does Flutter use a proprietary method for storing changing values?
- What are the biggest strengths that Flutter has?
- What are the biggest weaknesses that Flutter has?
- What are the greatest differences between Flutter and React?

## 4. Find Resources
- Official Documentation: https://docs.flutter.dev/
- What is Flutter Video: https://www.youtube.com/watch?v=I9ceqw5Ny-4
- Flutter Architecture: https://docs.flutter.dev/resources/architectural-overview
- Advantages and Disadvantages of Flutter: https://www.geeksforgeeks.org/flutter-advantages-disadvantages-and-future-scopes/#
- Pros and Cons: https://waverleysoftware.com/blog/why-use-flutter-pros-and-cons/
- Flutter vs React Native: https://radixweb.com/blog/flutter-vs-react-native
- State Management in Flutter vs React: https://medium.com/codex/state-management-in-flutter-framework-explained-as-react-js-developer-628422469a#:~:text=Flutter%20provides%20several%20ways%20to,state%20at%20the%20component%20level.

## 5. Answer our Questions
- Flutter doesn't use JavaScript at all! It uses a proprietary language created by Google called Dart.
- Considering Flutter does not use JavaScript, it obviously can't just be incorprated into an existing JavaScript application. It must be built from the ground up with its own framework and environment.
- In a sense, Flutter does utilize a component-like structure. However, it's important to note that Flutter documentation itself refers to these component-like pieces as Widgets.
- Flutter Widgets appear to be created using classes. However, an important distinction is that a singular widget is built as a combination of multiple classes. Where a singular React component would use multiple functions defined within the component, a Flutter widget defines the various "functions" as separate classes, and packages them together?
- Flutter uses its own variation of state management. It differs from React's state management in many ways. For one, state updates are handled synchronously in Flutter, as opposed to React's asynchronous state updates. Additionally, Flutter's state is not managed at the widget level, unlike React. Finally, if a widget-tree's state updates, Flutter will re-render the entire widget tree, whereas React will only update the components that are directly impacted by the updates to the component tree's state. 
- Strengths:
  - Fast development due to changes being visible in real time as they are made when developing
  - Flutter has its own built-in UI elements that make it easy to design nice looking applications
  - The framework is optimized to perform on a wide range of devices, and is thus a fairly efficient framework.
  - Flutter apps are made to work on a wide range of devices and environments, from mobile applications, to browser web applications, and even desktop applications. 
- Weaknesses:
  - You need to learn an entire new language, so there's a much steeper learning curve. 
  - The proprietary language, paired with the unique architecture, mean that there is a much more limited set of third party libraries to use. 
  - Job-wise, there are a much smaller number of opportunities because companies are slow to adopt new limited technologies.
- Frankly, a better question is what are the biggest similarities between React and Flutter, and that answer is: not many.

## 6. Summarize and Share
My assumptions regarding Flutter were almost entirely wrong. I was correct in assuming that Flutter can be used to create client-side web applications, but that's about it.

JavaScript doesn't even apply to Flutter in any way. Flutter uses Dart, a language also developed by Google, and also uses a different structure for creating its "components," known as widgets. There are a few similarities in terms of the UI updating in reaction to state changes, but that's about it. Flutter relies much more heavily on its built in capabilities than React does. 

Overall, Flutter does look to be a fairly efficient and optimized option, but the limited third party support, in addition to the limited adoption by large companies, makes the benefits of using Flutter much harder to justify over something more commonly used, such as React or Angular. 

Flutter also seems to be more geared towards mobile and/or desktop applications, even though it can be used to create browser based web applications.