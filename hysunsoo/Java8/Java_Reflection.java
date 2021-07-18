package com.basic.javastudy;

import org.junit.jupiter.api.Test;

import java.lang.annotation.Annotation;
import java.lang.reflect.Method;
import java.util.Arrays;

public class ReflectionTest {

    public static class Service{
        @PrintAnnotation
        public void method1(){
            System.out.println("실행 1");
        }

        @PrintAnnotation(value = "*")
        public void method2(){
            System.out.println("실행 2");
        }

        @PrintAnnotation(number = 10)
        public void method3(){
            System.out.println("실행 3");
        }

        public void method4(){
            System.out.println("실행 4");
        }
    }

    @Test
    void testReflection(){
        Class<?> targetClass = Service.class;
        Method[] methods = targetClass.getDeclaredMethods();
        Arrays.asList(methods).stream()
                .filter(method -> method.isAnnotationPresent(PrintAnnotation.class))
                .forEach(method -> {
                    try{
                        PrintAnnotation printAnnotation = method.getAnnotation(PrintAnnotation.class);
                        int num = printAnnotation.number();
                        String val = printAnnotation.value();
                        for(int k = 0; k < num; k++){
                            System.out.print(val);
                        }
                        System.out.println();
                        method.invoke(new Service());
                    }catch (Exception e){

                    }
                });

    }
}
