import { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

import styles from "./popularjobs.style";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import useFetch from "../../../hook/useFetch";



const Popularjobs = () => {

  const router = useRouter();
  const { data, isLoading, error, refetch } = useFetch
  (
    'search',
    { query: 'React developer',
      num_pages: 1 
    }
  )

  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item) => {           
    router.push(`/job-details/${item.job_id}`); // Redirect a la página del trabajo
    setSelectedJob(item.job_id);                // Establece estado de selectedJob
  };

  return (
    // margintop:24
    <View style={styles.container}>
      
      {/* fd:row jc:space-between aic */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      {/* margintop:16 */}
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary}/>
        ): error ? (
          <Text>Something went wrong</Text>
        ): (
          <FlatList 
            data={ data }
            renderItem={({ item }) => (
              <PopularJobCard 
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item) => item.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}

      </View>

    </View>
  )
}

export default Popularjobs