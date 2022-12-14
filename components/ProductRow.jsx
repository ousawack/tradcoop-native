import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import ProductCard from "./ProductCard";
import { useNavigation } from "@react-navigation/native";
import sanityClient, { urlFor } from "../src/sanity";

import { useState, useEffect } from "react";

const ProductRow = ({ title, description }) => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
            *[_type =="product"]{
              ...,
            }
        `
      )
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <View>
      <View className="mx-2 my-3">
        <TouchableOpacity
          onPress={() => navigation.navigate("ProductList", id)}
        >
          <View className="flex-row items-center justify-between px-4">
            <Text
              style={{ fontFamily: "Poppins_700Bold" }}
              className="text-xl text-[#4E1703]"
            >
              {title}
            </Text>
            <ArrowRightIcon color="#C3700D" />
          </View>
        </TouchableOpacity>
        <Text
          style={{ fontFamily: "Poppins_600SemiBold" }}
          className="text-sm text-[#7B420E] px-4"
        >
          {description}
        </Text>

        <ScrollView
          horizontal
          contentContainerStyle={{
            paddingHorizontal: 5,
            paddingVertical: 5,
            paddingBottom: 30,
          }}
          showsHorizontalScrollIndicator={false}
          className="pt-3"
        >
          {/* Coop Product Cards... */}
          {products?.map((product) => (
            <ProductCard
              key={product._id}
              id={product._id}
              imgUrl={urlFor(product.image).url()}
              title={product.name}
              category={product.category}
              rating={product.rating}
              price={product.price}
              address={product.address}
              description={product.short_description}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default ProductRow;
