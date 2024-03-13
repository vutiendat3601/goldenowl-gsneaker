package asia.goldenowl.intern.gsneaker.dto;

import java.util.List;

import org.springframework.data.domain.Page;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
@AllArgsConstructor
public class PaginationDto<T> {
    private List<T> items;

    private int numOfItems;

    private long totalItems;

    private int pageNum;

    private int pageSize;

    private int totalPages;

    public static <R> PaginationDto<R> mapToPaginationDto(Page<R> page) {
        return PaginationDto.<R>builder()
                .items(page.getContent())
                .numOfItems(page.getNumberOfElements())
                .totalItems(page.getTotalElements())
                .pageNum(page.getNumber())
                .pageSize(page.getSize())
                .totalPages(page.getTotalPages())
                .build();
    }
}
